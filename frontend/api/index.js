import axios from "axios";

const API = axios.create({ baseURL : 'http://localhost:5000' })

// send token to server for need access of auth to every req and more to db 
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}` // convert string to json before send to server
    }
    return req
})

export const fetchPosts = () => API.get('/posts')
export const fetchPost = (id) => API.get(`/posts/${id}`)

export const createPosts = (newPost) => API.post('/posts', newPost)
export const deletePost = (postId) => API.delete(`/posts/${postId}`)
export const updatePost = (id, post) => API.patch(`/posts/${id}`, post)

export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)