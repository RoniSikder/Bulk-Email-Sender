const express = require("express");
const router = express.Router();
const mailer = require("./mail_setup.js");

router.post("/send", async (req, res) => {
  const { sender_email,appPassword,content } = req.body;
  const result = await mailer(sender_email,appPassword,content);
  if (result) {
    res.status(200).json({ message: "Emails sent successfully" });
  } else {
    res.status(500).json({ message: "Failed to send emails" });
  }
});

module.exports = router;
