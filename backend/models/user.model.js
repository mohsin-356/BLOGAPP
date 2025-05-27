import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    img:{
        type:String,
    },
    savedPosts:{
        type:[String],
        default:[]
    }
},{timestamps:true});

export default mongoose.model("User", userSchema);
