import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema(
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
