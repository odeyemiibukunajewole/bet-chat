import Joi from "joi";

export const interestSchema = Joi.object({
    interest: Joi.string().required(),

});