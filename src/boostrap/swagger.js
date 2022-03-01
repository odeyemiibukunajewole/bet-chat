const app = require("./express")();

const swaggerUi = require("swagger-ui-express");

const swaggerJSDoc = require("swagger-jsdoc");



const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BetChat API",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Odeyemi Ibukun",
        url: "ww.com",
        email: "odeyemiibukuna@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/books",
      },
    ],
  },
  apis: ["./routes/books.js"],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

var options = {
  swaggerOptions: {
    url: "http://petstore.swagger.io/v2/swagger.json",
  },
};

module.exports = function () {
  // router.use('/api-docs', swaggerUi.serve);

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, { explorer: true })
  );

  /**
   * @openapi
   * /:
   *   get:
   *     description: Welcome to swagger-jsdoc!
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  return swaggerDocs;
};
