import { Router } from "express";

import { getPosts, getPostById, getPostsByUserId } from "../controllers/post.controller.js";

const router = Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPostById);
router.get("/posts/user/:id", getPostsByUserId);

export default router;