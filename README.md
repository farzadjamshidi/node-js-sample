# node-js-sample

npm init

yarn add express

yarn add dotenv
yarn add pg nodemon --dev

Create shop db manually for your user in postgress

npm run db:initiate

Create social network db manually for your user in postgress

npm run db:initiate

npm run dev

yarn add swagger-jsdoc swagger-ui-express --dev

create swagger.config.js as below:

const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Express API Documentation",
        version: "1.0.0",
        description: "This is a simple API documentation for our Express.js project.",
    },
    servers: [
        {
            url: "http://localhost:5000",
            description: "Local server",
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ["./src/routes/*.js"], // Point to the route files where you define API documentation
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;



create swagger.routes.js as below:

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../config/swagger.config");

const router = express.Router();

// Serve Swagger UI
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;


use it in index.js file:

app.use("/api", swaggerRoutes);

