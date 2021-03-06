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

export const getPost = async (req, res) => {
    const { id } = req.params // getting post id from parameter

    try {
        const post = await PostModel.findById(id)

        res.status(200).json({ data : post})
    } catch (error) {
        res.status(404).json({ message : error.message })
    }

}

export const createPost = async (req, res) => {
    const post = req.body
    // console.log(post)
    const newPostModel = new PostModel({...post , creator: req.userId, createdAt : new Date().toDateString() }) 
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
        res.status(409).json({ message : error})
    }
}

export const updatePost = async (req, res) => {
    const {id} = req.params
    const post = req.body
    try {
        if(!mongoose.Types.ObjectId(id)) return res.status(404).send('No post with that id')
        const updatedPost = await PostModel.findByIdAndUpdate(id, {...post, id}, {new : true})
        res.json(updatedPost)
    } catch (error) {
        res.status(409).json({ message : error.message })
    }
}