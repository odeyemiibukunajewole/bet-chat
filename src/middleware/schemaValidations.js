import { interestSchema } from "../schema/interest";
import { userSchema } from "../schema/user";
import {postSchema} from "../schema/post";

export const interestValidate = (req, res, next) => {
  try {
    const { error, value } = interestSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

export const usertValidate = (req, res, next) => {
  try {
    const { error, value } = userSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

export const postValidate = (req, res, next) => {
  try {
    const { error, value } = postSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

