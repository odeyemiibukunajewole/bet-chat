import express from "express";
import PostController from "../controller/PostController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";
import { postValidate } from "../middleware/schemaValidations";

const postRouter = express.Router();

postRouter.post("/create",
    handleErrorAsync(postValidate),
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(PostController.createPost)
);


postRouter.get(
    "/get-user-interest-post",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(PostController.getUserPost)
);


export default postRouter;
