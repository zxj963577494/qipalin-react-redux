import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED
} from '../constants/actionTypes'

const initialState = {
  postsList: [],
  isFetching: false
}

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...state, isFetching: true, postsList: [] }
    case GET_POSTS_SUCCESS:
      return { ...state, postsList: state.postsList.concat(action.payload) }
    case GET_POSTS_FAILED:
      return { ...state, isFetching: false }
    default:
      return { ...state, isFetching: false }
  }
}

export default postsReducer