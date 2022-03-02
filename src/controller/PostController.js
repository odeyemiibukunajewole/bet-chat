import db from "../../models";
import App from "../helpers";
import { Op } from "sequelize";
const { Post } = db;

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
            const posts = await Post.findAll({});
            if (!posts)
                return res.status(200).send({ message: "Successful", posts: [] });

            return res.status(200).send({ message: "Successful", posts });
        } catch (error) {
            throw new Error(error);
        }
    }

}

export default PostController;
