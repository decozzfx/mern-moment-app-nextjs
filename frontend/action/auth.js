import { AUTH } from "../constant/actionTypes";
import * as api from '../api'
import Router from "next/router";

export const signin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData)

        dispatch({ type : AUTH, payload : data })

        Router.push('/')
    } catch (error) {
        console.log(error)        
    }
} 

export const signup = async (formData) => {
    try {
        await api.signUp(formData)
    } catch (error) {
        console.log(error)
    }
}