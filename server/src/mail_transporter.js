require("dotenv").config();

const mailer_credentials = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  rateLimit: 10,
  connectionTimeout: 5000,
  greetingTimeout: 3000,
  socketTimeout: 10000,
  auth: {
    user: process.env.GOOGLE_APP_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
  logger: true,
  debug: true,
};

module.exports = mailer_credentials;
