const user = {
  email: "popan653@gmail.com",
  validPassword: "Qwert_1234",
  invalidPassword: "Qwert_w2221234",
};

const loginTestCases = [
  {
    email: "popan653@gmail.com",
    password: "Qwert_1234",
    expectedResult: "sucess",
  },
  {
    email: "popan6@gmail.com",
    password: "Qwert_12345555",
    expectedResult: "failed",
  },

  {
    email: "popan653@gmail.com",
    password: "Qwert_12345555",
    expectedResult: "failed",
  },
];

export { user, loginTestCases };
