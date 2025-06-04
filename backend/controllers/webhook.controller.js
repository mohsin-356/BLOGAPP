import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";
import { Webhook } from "svix";

export const clerkWebHook = async (req, res) => {
  try {
    console.log("==================== WEBHOOK DEBUG START ====================");
    console.log("Raw request body:", JSON.stringify(req.body));
    console.log("Headers:", req.headers);
    
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
    
    if (!WEBHOOK_SECRET) {
      console.error("Webhook secret is not configured!");
      return res.status(500).json({
        message: "Webhook secret needed!",
      });
    }

    // Verify webhook signature
    const svix_id = req.headers["svix-id"];
    const svix_timestamp = req.headers["svix-timestamp"];
    const svix_signature = req.headers["svix-signature"];

    if (!svix_id || !svix_timestamp || !svix_signature) {
      console.error("Missing required Svix headers");
      return res.status(400).json({
        message: "Missing required Svix headers",
      });
    }

    const payload = req.body;
    const headers = req.headers;

    let evt;
    try {
      const wh = new Webhook(WEBHOOK_SECRET);
      evt = wh.verify(payload, headers);
      console.log("Webhook verification successful");
    } catch (err) {
      console.error("Webhook verification failed:", err);
      return res.status(400).json({
        message: "Webhook verification failed!",
      });
    }

    console.log("Webhook event type:", evt.type);
    console.log("Webhook event data:", JSON.stringify(evt.data, null, 2));

    if (evt.type === "user.created") {
      try {
        console.log("Attempting to create new user...");
        const userData = {
          clerkUserId: evt.data.id,
          username: evt.data.username || evt.data.email_addresses[0].email_address,
          email: evt.data.email_addresses[0].email_address,
          img: evt.data.image_url,
        };
        console.log("User data to be saved:", userData);
        
        const newUser = new User(userData);
        console.log("User model instance created");
        
        const savedUser = await newUser.save();
        console.log("User saved successfully:", savedUser);
      } catch (error) {
        console.error("Error creating user. Full error:", error);
        console.error("Error message:", error.message);
        if (error.code === 11000) {
          console.error("Duplicate key error - user might already exist");
        }
        return res.status(500).json({
          message: "Error creating user",
          error: error.message,
          code: error.code
        });
      }
    }

    if (evt.type === "user.deleted") {
      try {
        const deletedUser = await User.findOneAndDelete({
          clerkUserId: evt.data.id,
        });

        if (!deletedUser) {
          console.warn("User not found for deletion:", evt.data.id);
          return res.status(404).json({
            message: "User not found for deletion",
          });
        }

        await Post.deleteMany({ user: deletedUser._id });
        await Comment.deleteMany({ user: deletedUser._id });
        console.log("User and related data deleted successfully:", evt.data.id);
      } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({
          message: "Error deleting user",
          error: error.message,
        });
      }
    }

    console.log("==================== WEBHOOK DEBUG END ====================");
    return res.status(200).json({
      message: "Webhook processed successfully",
    });
  } catch (error) {
    console.error("Unexpected error in webhook handler:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};