const maildraft = (sender,re, subject, mailbody) => {
  const data = {
    from: sender,
    to: re,
    subject: subject,
    text: mailbody,
  };
  return data;
};
module.exports = maildraft;
