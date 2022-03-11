import { AUTH, LOGOUT } from "../constant/actionTypes"

const authReducer = ( state = { authData : null }, {type, payload}) => {
    // console.log(state)
    switch(type){
        case AUTH :
            localStorage.setItem('profile', JSON.stringify({ ...payload })) // convert to string type before pass to localstorage
            return { ...state, authData : payload }
        case LOGOUT :
            localStorage.clear()
            return { ...state, authData : null }
        case 'GETUSER' :
            return {...state, authData : JSON.parse(localStorage.getItem('profile'))} // convert to json type before get data from localstorage
        default :   
            return state
    }
}

export default authReducer