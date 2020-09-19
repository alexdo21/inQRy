const router = require("express").Router();
const { checkToken } = require('../../auth/token_validation');

const { register, login, checkIn, getUserRecords, getUser, getContactTrace } = require('./user.controller');

router.get("/", getUser);
router.post("/register", register);
router.post("/checkin", checkToken, checkIn);
router.post("/login", login);
router.get("/records", checkToken, getUserRecords);
router.get("/contacttrace", checkToken, getContactTrace);

module.exports = router;