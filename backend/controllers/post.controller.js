import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};
export const getPost = async (req, res) => {
  try {
    const slug = req.params.slug;
    if (!slug) {
      return res.status(400).json({ message: "Slug is required" });
    }
    const post = await Post.findOne({ slug: slug });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post" });
  }
};
export const createPost = async (req, res) => {
  try {
    const clerkUserId = req.auth().userId;
    if (!clerkUserId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const user = await User.findOne({ clerkUserId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const newPost = new Post({ user: user._id, ...req.body });
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: "Error creating post" });
  }
};
export const deletePost = async (req, res) => {
  try {
    const clerkUserId = req.auth().userId;
    if (!clerkUserId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const user = await User.findOne({ clerkUserId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      user: user._id,
    });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting post" });
  }
};
