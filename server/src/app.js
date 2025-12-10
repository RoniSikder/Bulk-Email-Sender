const express = require("express");
const cors = require("cors");
const app = express();

const sender = require("./sender");
const template = require("./template");

app.use(express.json());
app.use(cors());

app.use("/sender", sender);
app.use("/template", template);

module.exports = app;
