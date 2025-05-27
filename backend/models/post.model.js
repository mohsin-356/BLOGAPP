import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema(
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
