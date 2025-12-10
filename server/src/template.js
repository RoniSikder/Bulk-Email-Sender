const express = require("express");
const router = express.Router();
const mailer = require("./mail_setup.js");

router.post("/send", async (req, res) => {
  const { payload } = req.body;

  await mailer(payload);
});

module.exports = router;
