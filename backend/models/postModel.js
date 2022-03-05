import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    selectedFile : String,
    createdAt : {
        type : Date,
        default : new Date()
    }
})

const PostModel = mongoose.model('PostModel', postSchema)

export default PostModel