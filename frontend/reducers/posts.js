import { CREATE_POST, DELETE_POST, END_LOADING, FETCH_ALL, START_LOADING, SELECT_ID, UPDATE_POST } from "../constant/actionTypes"

const posts = (state = { isLoading : true, currentId: '', posts : [] }, {type, payload}) => {
    // console.log(state)
    switch(type){
        case START_LOADING :
            return { ...state, isLoading : true }
        case END_LOADING :
            return { ...state, isLoading : false }
        case FETCH_ALL :
            return { ...state, posts : payload.data }
        case CREATE_POST :
            return { ...state, posts : [...state.posts, payload.data ] }
        case DELETE_POST : 
            return { ...state, posts : state.posts.filter((post) => post.id !== payload) }
        case SELECT_ID :
            return { ...state, currentId : payload}
        case UPDATE_POST :
            return { ...state, posts : state.posts.map((post) => post._id === payload._id ? payload : post ) }
        default :
            return state
    }
}

export default posts