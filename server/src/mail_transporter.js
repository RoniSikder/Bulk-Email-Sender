const mailer_credentials = (user, appPass) => {
  const data = {
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
      user: user,
      pass: appPass,
    },
    logger: true,
    debug: true,
  };
  return data;
};

module.exports = mailer_credentials;
