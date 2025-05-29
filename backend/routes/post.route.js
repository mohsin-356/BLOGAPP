import express from "express";
const router = express.Router();
import { getPost, getPosts,createPost, deletePost } from "../controllers/post.controller.js";
router.get("/",getPosts);
router.get("/:slug",getPost);
router.post("/",createPost);
router.delete("/:id",deletePost);
export default router;
