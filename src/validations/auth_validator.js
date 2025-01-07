
const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.base': 'Email should be a type of text',
        'string.empty': 'Email cannot be an empty field',
        'string.email': 'Email format is invalid',
        'any.required': 'Email is a required field'
    }),
    password: Joi.string().required(),
}); 

module.exports = {loginSchema}; 