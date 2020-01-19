const Joi = require('@hapi/joi');

const validateUsers = (user) => {
  const schema = Joi.object({
    _id: Joi.any(),
    index: Joi.number(),
    name: {
      first: Joi.string().required().max(100).pattern(/^[A-Z][a-z]+$/),
      last: Joi.string().required().max(100).pattern(/^[A-Z][a-z]+$/).required()
    },
    email: Joi.string().email({minDomainSegments: 2}),
    password: Joi.string().required().max(255),
    registered: Joi.date().required()
  });

  if(schema.validate(user.toObject()).error == undefined) {
    return schema.validate(user.toObject()).value;
  } else {
    return schema.validate(user.toObject());
  }
}

module.exports = validateUsers;