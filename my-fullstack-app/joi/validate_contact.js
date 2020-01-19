const Joi = require('@hapi/joi');

const validateContact = (contact) => {
  const schema = Joi.object({
    _id: Joi.any(),
    index: Joi.number(),
    picture: Joi.string(),
    name: {
      first: Joi.string().pattern(/^[A-Z][a-z]+$/).required(),
      last: Joi.string().pattern(/^[A-Z][a-z]+$/).required()
    },
    relationship: [Joi.string(), Joi.allow(null)],
    age: [Joi.number(), Joi.allow(null)],
    email: [Joi.string(), Joi.allow(null)],
    phone: [Joi.string(), Joi.allow(null)],
    address: {
      building: [Joi.string(), Joi.allow(null)],
      street: [Joi.string(), Joi.allow(null)],
      city: [Joi.string(), Joi.allow(null)],
      state: [Joi.string(), Joi.allow(null)],
      country: [Joi.string(), Joi.allow(null)],
      zip: [Joi.string(), Joi.allow(null)]
    },
    meetingHistory: Joi.array().items(Joi.object({
      _id: Joi.any(),
      index: Joi.number(),
      date: Joi.string(),
      place: Joi.object({
        building: Joi.string(),
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        country: Joi.string(),
        zip: Joi.string()
      }),
      purpose: Joi.string(),
      checked: Joi.any(),
      readonly: Joi.any()
    })),
    registered: Joi.date().required()
  });

  if(schema.validate(contact.toObject()).error == undefined) {
    return schema.validate(contact.toObject()).value;
  } else {
    return schema.validate(contact.toObject());
  }
}

module.exports = validateContact;