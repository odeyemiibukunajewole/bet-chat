import Joi from "joi";

export const userSchema = Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    countryCode: Joi.string().required(),
    password: Joi.string().min(3).required().label('New Password'),
    confirmPassword: Joi.any().equal(Joi.ref('password'))
        .required()
        .label('Confirm password')
        .options({ messages: { 'any.only': '{{#label}} does not match' } }),
    interests: Joi.array()
        .required()
        .items(
            Joi.object({
                id: Joi.number().required(),
                value: Joi.string().required(),
            })
        )
        .min(1),
});