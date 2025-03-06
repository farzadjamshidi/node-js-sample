import { Router } from "express";

import { getProducts, getProductById } from "../controllers/product.controller.js";

const router = Router();

/**
 * @swagger
 * /api/shop/products:
 *   get:
 *     summary: Get products
 *     description: Get all products
 *     responses:
 *       200:
 *         description: Successfully retrieved products.
 *       404:
 *         description: User not found.
 */
router.get("/products", getProducts);

/**
 * @swagger
 * /api/shop/products/{id}:
 *   get:
 *     summary: Get product by ID
 *     description: Retrieve a single product by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the product to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved product.
 *       404:
 *         description: User not found.
 */
router.get("/products/:id", getProductById);

export default router;