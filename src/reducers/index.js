import { combineReducers } from 'redux'
import postReducer from './posts'
import tabbarsReducer from './tabbars'

const rootReducer = combineReducers({
  posts: postReducer,
  tabbars: tabbarsReducer
})

export default rootReducer
