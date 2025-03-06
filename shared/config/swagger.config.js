import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Express API Documentation",
        version: "1.0.0",
        description: "This is a simple API documentation for our Express.js project.",
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Local server",
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: [
        path.resolve(__dirname, "../../shop/src/routes/routes.js"),
        path.resolve(__dirname, "../../social-network/src/routes/routes.js")
    ], // Point to the route files where you define API documentation
};

export const swaggerSpec = swaggerJSDoc(options);