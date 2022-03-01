// import { editProfileSchema } from "../schema/editProfile";
// export const editProfileValidate = (req, res, next) => {
//   try {
//     const { error, value } = editProfileSchema.validate(req.body);
//     if (error)
//       return res.status(409).send({ message: "Validation failed", error });

//     return next();
//   } catch (error) {
//     throw new Error(error);
//   }
// };
