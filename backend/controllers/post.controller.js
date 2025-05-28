import Post from "../models/post.model.js";
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts" });
    }
}
export const getPost=async (req,res) => {
    try {
        const  slug  = req.params.slug;
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
}
export const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const post=await newPost.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: "Error creating post" });
    }
}