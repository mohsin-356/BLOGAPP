import Post from "../models/post.model.js";
import express from "express";
const router = express.Router();

router.get("/P-TEST", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send("<h1>Internal Server Error</h1>");
  }
});

export default router;
