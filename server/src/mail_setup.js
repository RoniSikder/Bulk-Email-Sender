const nodemailer = require("nodemailer");
const mailer_credentials = require("./mail_transporter.js");
const maildraft = require("./mail_drafter.js");

const mailer = async (sender) => {
  const cred = mailer_credentials(sender.sender, sender.appPassword);
  console.log(cred);
  console.log(sender);
  // const transporter = nodemailer.createTransport(cred);
  // await transporter
  //   .verify()
  //   .then(() => {
  //     console.log("Mailer setup complete");
  //   })
  //   .catch((error) => {
  //     console.error("Mailer setup failed:", error);
  //   });
  // const promises = sender.map(async (email) => {
  //   const mailbody = maildraft(email);
  //   try {
  //     const info = await transporter.sendMail(mailbody);
  //     console.log("Email sent:", info.response);
  //   } catch (error) {
  //     console.error("Email sending failed:", error);
  //   }
  // });
  // const results = await Promise.all(promises);
  // return results;
};

module.exports = mailer;
