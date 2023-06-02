import db from "../../models";
import App from "../helpers";
import { Op } from "sequelize";
const { Interest } = db;

class InterestController {
    static async createInterest(req, res) {
        try {
            const { interest } = req.body
            const interestUpperCase = interest.toUpperCase()
            const interestExist = await Interest.findOne({ where: { interest: interestUpperCase } });
            if (interestExist)
                return res.status(400).send({ message: "Interest Exist" });

            const createInterest = await Interest.create({ interest });

            return res.status(200).send({ message: "Successful", interest: createInterest });
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getAllInterest(req, res) {
        try {
            const interests = await Interest.findAll({});
            if (!interests)
                return res.status(200).send({ message: "Successful", interests: [] });

            return res.status(200).send({ message: "Successful", interests });
        } catch (error) {
            throw new Error(error);
        }
    }

}

export default InterestController;
