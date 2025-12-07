const express = require("express");
const router = express.Router();
const mailer = require("./mail_setup.js");

router.post("/send", async (req, res) => {
  const { emails } = req.body;
  await mailer(emails);
});

module.exports = router;
