import { CREATE_POST, DELETE_POST, END_LOADING, FETCH_ALL, START_LOADING } from "../constant/actionTypes"

const posts = (state = { isLoading : true, posts : [] }, {type, payload}) => {
    // console.log(payload)
    switch(type){
        case START_LOADING :
            return { ...state, isLoading : true }
        case END_LOADING :
            return {...state, isLoading : false }
        case FETCH_ALL :
            return {...state, posts : payload.data }
        case CREATE_POST :
            return {...state, posts : [...state.posts, payload.data ]}
        case DELETE_POST : 
            return { ...state, posts : state.posts.filter((post) => post.id !== payload) }
        default :
            return state
    }
}

export default posts