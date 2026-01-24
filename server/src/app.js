const express = require("express");
const cors = require("cors");
const app = express();

const sender = require("./sender");

app.use(express.json());
app.use(cors());

app.use("/sender", sender);

module.exports = app;
