const pool = require('../../config/database');

module.exports = {
    createUser: (data, callback) => {
        pool.query(
            `insert into user(first_name, last_name, email, password_hash) 
             values(?,?,?,?)`,
            [data.firstname, data.lastname, data.email, data.password],
            (err, res, fields) => {
                if (err) callback(err);
                return callback(null, res);
            }
        )
    },

    getUserByUserEmail: (email, callback) => {
        pool.query(
            `select * from user where user.email = ?`,
            [email],
            (err, res, fields) => {
                if (err) callback(err);
                return callback(null, res[0])
            }
        )
    },
    getLocationById: (id, callback) => {
        pool.query(
            `select * from site where location_id = ?`,
            [id],
            (err, res, fields) => {
                if (err) callback(err)
                return callback(null, res[0])
            }
        )
    },
    checkIn: (data, callback) => {
        pool.query(
            `insert into entry(user_id, location_id, time)
            values(?, ?, ?)`,
            [data.userId, data.locationId, data.time],
            (err, res, fields) => {
                if (err) callback(err);
                return callback(null, res)
            }
        )
    },

    getEntriesByUserId: (id, callback) => {
        pool.query(
            `select * from entry where entry.user_id = ?`,
            [id],
            (err, res, fields) => {
                if (err) callback(err);
                return callback(null, res)
            }
        )
    },

    getEntriesAroundLocationTime: (entry) => {
        return new Promise((resolve,reject) => {
            pool.query(
                `select * from entry where entry.location_id = ? AND entry.time between date_sub(?,interval 1 hour) AND date_add(?,interval 1 hour)`,
                [entry.location_id, entry.time, entry.time],
                (err, res, fields) => {
                    if (err) reject(new Error(err));
                    resolve(res)
                }
            )

        })
    }

}