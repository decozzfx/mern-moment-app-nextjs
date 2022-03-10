import { AUTH, LOGOUT } from "../constant/actionTypes"

const authReducer = ( state = { authData : null }, {type, payload}) => {
    // console.log(state)
    switch(type){
        case AUTH :
            localStorage.setItem('profile', JSON.stringify({ ...payload }))
            return { ...state, authData : payload }
        case LOGOUT :
            localStorage.clear()
            return { ...state, authData : null }
        default : 
            return state
    }
}

export default authReducer