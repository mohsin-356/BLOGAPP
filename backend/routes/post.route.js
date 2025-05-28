import express from "express";
const router = express.Router();
import { getPost, getPosts } from "../controllers/post.controller.js";
router.get("/",getPosts);
router.get("/:slug",getPost);
export default router;
