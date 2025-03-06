import {Router} from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../config/swagger.config.js";

const router = Router();

// Serve Swagger UI
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
