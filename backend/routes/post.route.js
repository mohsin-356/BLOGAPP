import express from "express";
const router = express.Router();
import { getPost, getPosts } from "../controllers/post.controller.js";
router.get("/P-TEST",getPosts);
router.get("/P-TEST/:slug",getPost);
export default router;
