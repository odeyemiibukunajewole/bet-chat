import db from "../../models";
import App from "../helpers";
import { Op } from "sequelize";

const { User, UserInterestDetail, Interest } = db;
class AuthController {
  static async signUp(req, res) {
    try {
      const {
        firstName,
        lastName,
        interests,
        password,
        phoneNumber,
        address,
        email,
        countryCode,
      } = req.body;

      if (!email || !phoneNumber || !countryCode)
        return res.status(400).send({
          message: "Missing Email{email}|Phonenumber{phoneNumber}|countryCode",
        });

      let newPhoneNumber = "";
      if (phoneNumber[0] === "0") {
        newPhoneNumber = phoneNumber.substring(1, phoneNumber.length);
      } else {
        newPhoneNumber = phoneNumber;
      }

      console.log("newPhoneNumber ", newPhoneNumber)

      const userExits = await User.findOne({
        where: {
          [Op.or]: [{ phoneNumber: newPhoneNumber, countryCode }, { email }],
        },
        raw: true,
      });
      if (userExits)
        return res.status(401).send({ message: "User Exist" });

      const hashPassword = App.hashPassword(password);

      const user = await User.create(
        {
          email,
          firstName,
          lastName,
          password: hashPassword,
          phoneNumber: newPhoneNumber,
          address,
          countryCode,
        },
        { raw: true },
      );
      const userInterests = interests.map((item) => ({
        userId: user.id,
        interestId: item.id
      }));

      await UserInterestDetail.bulkCreate(userInterests);


      const token = App.assignToken({ id: user.id, email: user.email });

      res.status(201).send({ message: "Successful", user: { ...user, token } });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email },
        exclude: ["password"],
        raw: true,
      });
      if (!user)
        return res
          .status(404)
          .send({ message: "Wrong email/password combination" });

      if (!App.isPasswordEqual(password, user.password))
        return res
          .status(404)
          .send({ message: "Wrong email/password combination" });

      const token = App.assignToken({ id: user.id, email: user.email });

      return res.status(200).send({ user: { ...user, token } });
    } catch (error) {
      throw new Error(error);
    }
  }
  static async getUserProfile(req, res) {
    try {
      const me = await User.findOne({
        where: { id: req.user.id },
        attributes: { exclude: ["password"] },
        include: [{
          model: UserInterestDetail,
          where: {
            userId: {
              [Op.in]: [req.user.id]
            }
          },
        }],
        raw: true,
      });
      if (!me) return res.status(404).send({ message: "User not found" });

      const { password, ...rest } = me;

      return res.status(200).send({ user: { ...rest } });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default AuthController;
