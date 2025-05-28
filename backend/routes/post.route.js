import express from "express";
const router = express.Router();
import { getPosts } from "../controllers/post.controller.js";
router.get("/P-TEST",getPosts);
export default router;
