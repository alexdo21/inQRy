const { createUser, getUserByUserEmail, checkIn, getEntriesByUserId, getLocationById, getEntriesAroundLocationTime } = require('./user.service');
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    register: async (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        var token = undefined

        console.log(body)
        createUser(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Internal Server Error"
                })
            }
            token = sign({ result: results }, process.env.JWT_KEY, {
                expiresIn: "24h"
            })
            
            getUserByUserEmail(body.email, (err, results) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        success: 0,
                        message: "Internal Server Error"
                    })
                }
                console.log(results)
                return res.status(200).json({
                    success: 1,
                    token: token,
                    user: {
                        userId: results.user_id,
                        firstname: results.first_name,
                        lastname: results.last_name,
                        email: results.email
                    }
                })
            })
        })

    },

    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
            if (err) console.log(err)
            const result = compareSync(body.password, results.password_hash)
            if (result) {
                results.password = undefined;
                const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
                    expiresIn: "24h"
                });
                return res.json({
                    success: 1,
                    message: "Login success",
                    token: jsontoken,
                    user: {
                        userId: results.user_id,
                        firstname: results.first_name,
                        lastname: results.last_name,
                        email: results.email
                    }
                })
            } else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                })
            }
        })
    },

    checkIn: async (req, res) => {
        const body = req.body;
        var siteName = undefined
        await getLocationById(body.locationId, (err, results) => {

            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Internal Server Error"
                })
            }
            site = results
        })
        
        await checkIn(body, (err, results) => {

            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Internal Server Error"
                })
            }
            if (results === undefined) {
                return res.status(500).json({
                    success: 0,
                    message: "Internal Server Error"
                })
            }
            return res.json({
                success: 1,
                message: "Successfully checked in",
                site: {
                    locationName: site.location_name,
                    locationId: site.location_id
                }
            })
        })
    },

    getUserRecords: (req, res) => {
        const body = req.body;
        getEntriesByUserId(body.id, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Internal Server Error"
                })
            }
            return res.json({
                success: 1,
                message: "Found entries for user",
                payload: results
            })
        })
    },

    getUser: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Internal Server Error"
                })
            }
            return res.json({
                succes: 1,
                message: "Found user",
                payload: results
            })
        })
    },

    getContactTrace: (req, res) => {
        const body = req.body;
        var contactTraceList = [];
        var entries = null;

        getEntriesByUserId(body.userId, async (err, results) => {
            if(err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Internal Server Error"
                })
            }
            entries = results
            for(let i = 0; i < entries.length; i++) {
                await getEntriesAroundLocationTime(entries[i], (err, res) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({
                            success: 0,
                            message: "Internal Server Error"
                        })
                    }
                }).then(res => contactTraceList[i]=res)
            }

            return res.status(400).json({
                success: 1,
                message: "Contact Trace Complete",
                payload: contactTraceList
            })
        })

        
        
    }

}