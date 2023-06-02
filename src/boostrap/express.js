import authRoute from "../routes/authRoute";
import interestRoute from "../routes/interestRoute";
import postRouter from "../routes/postRouth";

import { logger } from "../logger/winston";


const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = function () {
  app.use(bodyParser.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/interest", interestRoute);
  app.use("/api/v1/post", postRouter);





  app.get("/", (req, res) => {
    res.send("welcome to backend");
  });

  app.use(function (err, req, res, next) {
    logger.error(
      err.response ? err.response.data : err.stack ? err.stack : err
    );

    res.status(err?.response?.status || 500).send({
      mesage: err.response ? err.response.data : err.stack ? err.stack : err,
      description: `Something broke!. Check application logs for helpful tips. OriginalUrl: ${req.originalUrl}  `,
    });
  });
  //   server.listen(PORT, () => {
  //     console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  //   });

  return app;
};
