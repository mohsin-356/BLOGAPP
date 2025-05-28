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
        const { slug } = req.params.slug;
        const post = await Post.findOne({ slug: slug });
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts" });
    }
}