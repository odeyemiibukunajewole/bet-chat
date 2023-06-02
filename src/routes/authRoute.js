import express from "express";
import AuthController from "../controller/AuthController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";
import { usertValidate, } from "../middleware/schemaValidations";

const router = express.Router();

router.post("/signup",
  handleErrorAsync(usertValidate),
  handleErrorAsync(AuthController.signUp)
);

router.post("/login", handleErrorAsync(AuthController.login));

router.get(
  "/user/get-profile",
  handleErrorAsync(AuthMiddleware.verifyToken),
  handleErrorAsync(AuthController.getUserProfile)
);


export default router;
