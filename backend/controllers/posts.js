import mongoose from "mongoose";
import PostModel from "../models/postModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()

        res.status(200).json({ data : posts })
    } catch (error) {
        res.status(404).json({ message : error })
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    console.log(post)
    const newPostModel = new PostModel({...post, creator : post.name, createdAt : new Date().toDateString() })
    try {
        await newPostModel.save()
        res.status(201).json(newPostModel)
    } catch (error) {
        res.status(409).json({ message : error})
    }
}

export const deletePost = async (req, res) => {
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId(id)) return res.status(404).send('No post with that id')
        await PostModel.findByIdAndDelete(id)

        res.status(200).json({ message : 'post has been deleted successfully' })
    } catch (error) {
        
    }
}