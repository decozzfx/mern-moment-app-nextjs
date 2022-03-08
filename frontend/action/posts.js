import * as api from '../api'
import { CREATE_POST, DELETE_POST, END_LOADING, FETCH_ALL, START_LOADING } from '../constant/actionTypes'

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({ type : START_LOADING })
        const { data } = await api.fetchPosts()

        dispatch({ type : FETCH_ALL, payload : data })
        
        dispatch({ type : END_LOADING })
    } catch (error) {
        console.log(error)
    }
}
export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPosts(post)
        dispatch({ type : CREATE_POST, payload : data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (postId) => async (dispatch) => {
    // console.log(postId)
    try {
        await api.deletePost(postId)
        dispatch({ type : DELETE_POST, payload : postId })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {updatedPost} = await api.updatePost(id, post)
        
        dispatch({ type : 'UPDATE_POST', payload : updatedPost })

    } catch (error) {
        console.log(error)
    }
}