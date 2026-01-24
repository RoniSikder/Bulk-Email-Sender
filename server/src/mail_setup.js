const nodemailer = require("nodemailer");
const mailer_credentials = require("./mail_transporter.js");
const maildraft = require("./mail_drafter.js");

const mailer = async (sender_email, appPassword, content) => {
  const cred = mailer_credentials(sender_email, appPassword);
  const transporter = nodemailer.createTransport(cred);
  await transporter
    .verify()
    .then(() => {
      console.log("Mailer setup complete");
    })
    .catch((error) => {
      console.error("Mailer setup failed:", error);
    });
  const promises = content.map(async (item) => {
    const mailbody = maildraft(sender_email, item.re_email, item.mail_subject, item.mail_body);
    try {
      const info = await transporter.sendMail(mailbody);
      console.log("Email sent:", info.response);
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  });
  const results = await Promise.all(promises);
  return results;
};

module.exports = mailer;
