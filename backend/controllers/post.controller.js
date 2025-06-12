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
//original
// export const createPost = async (req, res) => {
//   try {
//     const clerkUserId = req.auth().userId;
//     if (!clerkUserId) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     const user = await User.findOne({ clerkUserId });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const newPost = new Post({ user: user._id, ...req.body });
//     const post = await newPost.save();
//     return res.status(201).json(post);
//   } catch (error) {
//     return res.status(500).json({ message: "Error creating post" });
//   }
// };
//copy1
// export const createPost = async (req, res) => {
//   try {
//     const clerkUserId = req.auth().userId;
//     console.log("Clerk User ID:", clerkUserId);
    
//     if (!clerkUserId) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
    
//     const user = await User.findOne({ clerkUserId });
//     console.log("Found user:", user);
//     console.log("User _id:", user._id);
    
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
    
//     const newPost = new Post({ user: user._id, ...req.body });
//     console.log("New post before save:", newPost);
    
//     const post = await newPost.save();
//     console.log("Saved post:", post);
    
//     return res.status(201).json(post);
//   } catch (error) {
//     console.error("Error creating post:", error);
//     return res.status(500).json({ message: "Error creating post" });
//   }
// };
//copy2
export const createPost = async (req, res) => {
  try {
    const clerkUserId = req.auth().userId;
    console.log("Clerk User ID:", clerkUserId);
    
    if (!clerkUserId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    const user = await User.findOne({ clerkUserId });
    console.log("Found user:", user);
    console.log("User _id:", user._id);
    console.log("User _id type:", typeof user._id);
    console.log("User _id toString:", user._id.toString());
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // یہ line add کریں
    const postData = { user: user._id, ...req.body };
    console.log("Post data before creating:", postData);
    console.log("User field type:", typeof postData.user);
    
    const newPost = new Post(postData);
    console.log("New post after creating object:", newPost);
    console.log("New post user field:", newPost.user);
    console.log("New post user field type:", typeof newPost.user);
    
    const post = await newPost.save();
    console.log("Saved post:", post);
    
    return res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json({ message: "Error creating post" });
  }
};
export const deletePost = async (req, res) => {
  try {
    const clerkUserId = req.auth().userId;
    console.log("Clerk User ID:", clerkUserId);
    
    if (!clerkUserId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    const user = await User.findOne({ clerkUserId });
    console.log("User found:", user);
    console.log("User _id:", user._id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("Looking for post with ID:", req.params.id);
    console.log("And user ID:", user._id);
    
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      user: user._id
    });

    if (!post)
    {
      // Additional debugging
      const allPosts = await Post.find({ _id: req.params.id });
      console.log("Posts with this ID:", allPosts);
      return res.status(404).json({ message: "Post not found or you don't have permission" });
    }
    
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    return res.status(500).json({ message: "Error deleting post" });
  }
};

// export const deletePost = async (req, res) => {
//   try {
//     const clerkUserId = req.auth().userId;
//     console.log(clerkUserId);
//     if (!clerkUserId)
//     {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     const user = await User.findOne({ clerkUserId });
//     console.log("\n");
//     console.log("User found:", user._id);
//     console.log("\n");
//     // if (!user)
//     // {
//     //   return res.status(404).json({ message: "User not found" });
//     // }
//     const post = await Post.findOneAndDelete({
//       _id: req.params.id,
//       user: user._id
//     });

//     if (!post)
//     {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     return res.status(200).json({ message: "Post deleted successfully" });
//   }
//   catch (error)
//   {
//     console.error("Error deleting post:", error);
//     return res.status(500).json({ message: "Error deleting post" });
//   }
// };