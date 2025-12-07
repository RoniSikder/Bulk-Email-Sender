const maildraft = (sender) => {
  const data = {
    from: "wbbpesecretary.deled@gmail.com",
    to: sender,
    subject:
      "Instruction to the D. El. Ed. Part-I ( 2024-2026) & Part-II ( 2023-2025) External Examiners for online submission of evaluated marks of external examination",
    text: "Dear Sir/ Madam,\n\nI am directed by the President of the West Bengal Board of Primary Education to request you to kindly upload the evaluated marks of  the  D. El. Ed. Part-I ( 2024-2026) & Part-II ( 2023-2025) External Examination within today ( 19/11/2025) positively, in order to publish the result of D. El. Ed. Part-I ( 2024-2026) & Part-II ( 2023-2025) examination urgently.\n\nThanking you,\nWith regards,\nSd./-\nSecretary\nWBBPE",
  };
  return data;
};
module.exports = maildraft;
