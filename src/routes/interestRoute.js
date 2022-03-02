import express from "express";
import InterestController from "../controller/InterestController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";
import { interestValidate, } from "../middleware/schemaValidations";

const interestRoute = express.Router();

interestRoute.post("/create",
    // handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(interestValidate),
    handleErrorAsync(InterestController.createInterest)
);

interestRoute.get("/all", handleErrorAsync(InterestController.getAllInterest));

export default interestRoute;
