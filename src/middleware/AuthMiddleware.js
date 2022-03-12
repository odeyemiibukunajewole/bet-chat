import App from "../helpers";

class AuthMiddleWare {
  static async verifyToken(req, res, next) {
    try {
      const token = req.headers["authorization"];
      if (!token)
        return res.status(401).send({ message: "Authorization failed" });
      const user = await App.decodeToken(token);
      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ message: "Authorization failed" });
    }
  }


  static async verifyTokenByID(req, res, next) {
    try {
      const token = req.params.tokenId;
      if (!token) {
        return res.status(401).send({ message: "Authorization failed" });
      }

      const user = await App.decodeToken(token);
      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ message: "Authorization failed" });
    }
  }
}

export default AuthMiddleWare;
