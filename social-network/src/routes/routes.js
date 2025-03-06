import { Router } from "express";

import { getPosts, getPostById, getPostsByUserId } from "../controllers/post.controller.js";

const router = Router();

/**
 * @swagger
 * /api/social-network/posts:
 *   get:
 *     summary: Get posts
 *     description: Get all posts
 *     responses:
 *       200:
 *         description: Successfully retrieved posts.
 *       404:
 *         description: User not found.
 */
router.get("/posts", getPosts);

/**
 * @swagger
 * /api/social-network/posts/{id}:
 *   get:
 *     summary: Get post by ID
 *     description: Retrieve a single post by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the post to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved post.
 *       404:
 *         description: User not found.
 */
router.get("/posts/:id", getPostById);

/**
 * @swagger
 * /api/social-network/posts/user/{id}:
 *   get:
 *     summary: Get post by user ID
 *     description: Retrieve all posts of a specific user by user ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved all posts of a specific user.
 *       404:
 *         description: User not found.
 */
router.get("/posts/user/:id", getPostsByUserId);

export default router;