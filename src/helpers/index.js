import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Op, Sequelize } from "sequelize";
import { Constant } from "../boostrap/config";
import db from "../../models";
const { } = db;


class App {
  static hashPassword(password) {
    const hash = bcrypt.hashSync(password, 8);
    return hash;
  }
  static isPasswordEqual(plainPassword, hashPassword) {
    return bcrypt.compareSync(plainPassword, hashPassword);
  }
  static generateUUID() {
    return uuidv4();
  }
  static assignToken(payload, expiresTime) {
    const token = jwt.sign(
      payload,
      process.env.SECRET_KEY || "charlesisawseosome",
      {
        expiresIn: expiresTime ? expiresTime : "2h",
      }
    );
    return token;
  }
  static decodeToken(token) {
    return new Promise((resolve, reject) => {
      try {
        const decoded = jwt.verify(
          token,
          process.env.SECRET_KEY || "charlesisawesome"
        );
        resolve(decoded);
      } catch (error) {
        reject(error);
      }
    });
  }
  static pagenation(page, size) {
    const limit = size ? +size : 24;
    const offset = page ? page * limit : 0;
    return { limit, offset };
  };

  static getPagingData(data, page, limit) {
    const { count: totalItems, rows: products } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, products, totalPages, currentPage };
  };

}

export default App;
