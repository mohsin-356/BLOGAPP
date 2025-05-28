import mongoose from "mongoose";
import { Schema } from "mongoose";
const postSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  img:{
    type: String,
  },
  title:{
    type:String,
    required: true,
    trim: true,
  },
  slug:{
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  desc:{
    type: String,
    trim: true,
  },
  content:{
    type: String,
    required: true,
  },
  isFeatured:{
    type:Boolean,
    default:false 
   },
   visit:{
    type:Boolean,
    default:0
   }
},
{ timestamps: true });
export default mongoose.model("Post", postSchema);
