import { combineReducers } from 'redux'
import {postsReducer, stickyPostsReducer} from './posts'
import tabbarsReducer from './tabbars'

const rootReducer = combineReducers({
  posts: postsReducer,
  sticky: stickyPostsReducer,
  tabbars: tabbarsReducer
})

export default rootReducer
