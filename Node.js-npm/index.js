const validate = require("validator");

const mail = "test@test.com";
const noMail = "abcDE123";

const check = (str) => {
  console.log(`it's ${validate.isEmail(str)} that ${str} is an E-mail`);
};

check(mail);
check(noMail);
