import { AUTH } from "../constant/actionTypes";
import * as api from '../api'
import Router from "next/router";

export const signin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData)

        dispatch({ type : AUTH, payload : data })

        Router.push('/dashboard')
    } catch (error) {
        console.log(error)        
    }
} 

export const signup = (formData) => async (dispatch) => {
    try {
       const {data} = await api.signUp(formData)

        // dispatch({ type : AUTH , payload : data })
    } catch (error) {
        console.log('action '+error)
    }
}