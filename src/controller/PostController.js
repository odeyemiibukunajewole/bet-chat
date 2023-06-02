import db from "../../models";
import App from "../helpers";
import { Op } from "sequelize";
const { Post, User, Interest, UserInterestDetail } = db;

class PostController {
    static async createPost(req, res) {
        try {
            const { postContent } = req.body

            const post = await Post.create({ postContent, userId: req.user.id });

            return res.status(200).send({ message: "Successful", post });
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getUserPost(req, res) {
        try {

            const { interestId } = await UserInterestDetail.findOne({
                where: { userId: req.user.id }
            })
            const posts = await Post.findAll({
                include: [{
                    model: User,
                    where: {
                        id: {
                            [Op.ne]: req.user.id
                        }
                    },
                    attributes: { exclude: ["password"] },
                    include: [{
                        model: UserInterestDetail,
                        where: {
                            interestId: {
                                [Op.eq]: interestId
                            }
                        }
                    }]
                }]
            });

            if (!posts)
                return res.status(200).send({ message: "Successful", posts: [] });

            return res.status(200).send({ message: "Successful", posts });
        } catch (error) {
            throw new Error(error);
        }
    }

}

export default PostController;
