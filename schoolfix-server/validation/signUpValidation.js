const joi = require("joi");

function signUpValidation(user) {
  const schema = joi.object({
    username: joi.string().required(),
    phoneNumber: joi.number().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });

  return schema.validate(user);
}

module.exports = {
  signUpValidation
}