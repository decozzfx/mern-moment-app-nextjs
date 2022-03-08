import axios from "axios";

const API = axios.create({ baseURL : 'http://localhost:5000' })

export const fetchPosts = () => API.get('/posts')
export const createPosts = (newPost) => API.post('/posts', newPost)
export const deletePost = (postId) => API.delete(`/posts/${postId}`)
export const updatePost = (id, post) => API.patch(`/posts/${id}`, post)