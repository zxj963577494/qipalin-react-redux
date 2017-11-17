import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_STICKYPOSTS_REQUEST,
  GET_STICKYPOSTS_SUCCESS,
  GET_STICKYPOSTS_FAILED
} from '../constants/actionTypes'

const initialPostsState = {
  postsList: [],
  isFetching: false
}

const initialStickyPostsState = {
  list: [],
  isShowLogo: true,
  isFetching: false,
  default: {
    pic: require('../assets/images/logo.png'),
    title: '汇聚各种奇闻趣事的分享社区'
  }
}

function postsReducer(state = initialPostsState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...state, isFetching: true, postsList: [] }
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        postsList: state.postsList.concat(action.payload),
        isFetching: false
      }
    case GET_POSTS_FAILED:
      return { ...state, isFetching: false }
    default:
      return { ...state, isFetching: false }
  }
}

function stickyPostsReducer(state = initialStickyPostsState, action) {
  switch (action.type) {
    case GET_STICKYPOSTS_REQUEST:
      return { ...state, isFetching: true }
    case GET_STICKYPOSTS_SUCCESS:
      if (action.payload.length > 0) {
        return {
          ...state,
          sticky: state.list.slice(0, 1).concat(action.payload),
          isFetching: false,
          isShowLogo: false
        }
      } else {
        return { ...state, isFetching: false }
      }
    case GET_STICKYPOSTS_FAILED:
      return { ...state, isFetching: false }
    default:
      return { ...state, isFetching: false }
  }
}

export { postsReducer, stickyPostsReducer }
