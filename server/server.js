require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const userRouter = require("./api/user/user.router");

app.use(express.json());
app.use(cors());
app.use("/api/user/", userRouter)

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("Server running on port: " + port)
});