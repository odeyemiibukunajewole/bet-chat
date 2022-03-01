import express from "express";
import AuthController from "../controller/AuthController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";
import { editProfileValidate, } from "../middleware/schemaValidations";

const router = express.Router();

router.post("/signup", handleErrorAsync(AuthController.signUp));

router.post("/admin/login", handleErrorAsync(AuthController.adminLogin));

// router.post(
//   "/super-admin/create-admin",
//   handleErrorAsync(AuthMiddleware.verifyToken),
//   handleErrorAsync(AuthMiddleware.isSuperAdmin),
//   handleErrorAsync(AuthController.createAdmin)
// );

router.post(
  "/verify-phonenumber",
  handleErrorAsync(AuthController.verifyPhoneNumber)
);
router.post("/verify-email", handleErrorAsync(AuthController.verifyEmail));

router.post("/login", handleErrorAsync(AuthController.login));



router.put(
  "/edit-profile",
  AuthMiddleware.verifyToken,
  // handleErrorAsync(editProfileValidate),
  handleErrorAsync(AuthController.editProfile)
);


router.get(
  "/user/get-profile",
  handleErrorAsync(AuthMiddleware.verifyToken),
  handleErrorAsync(AuthController.getUserProfile)
);


export default router;
