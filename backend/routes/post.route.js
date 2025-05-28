import express from "express";
const router = express.Router();
import { getPost, getPosts,createPost } from "../controllers/post.controller.js";
router.get("/",getPosts);
router.get("/:slug",getPost);
router.post("/",createPost);
export default router;
