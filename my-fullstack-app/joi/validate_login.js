const Joi = require('@hapi/joi');

const validateLogin = (login) => {
  const schema = Joi.object({
    _id: Joi.any(),
    email: Joi.string().email({minDomainSegments: 2}),
    password: Joi.string().required().max(255),
    registered: Joi.date().required()
  });

  if(schema.validate(login.toObject()).error == undefined) {
    return schema.validate(login.toObject()).value;
  } else {
    return schema.validate(login.toObject());
  }
}

module.exports = validateLogin;