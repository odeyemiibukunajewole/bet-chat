import Joi from "joi";

export const postSchema = Joi.object({
    postContent: Joi.string().required(),

});