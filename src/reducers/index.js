import { combineReducers } from 'redux'
import { articlesReducer, stickyArticlesReducer } from './articles'
import tabbarsReducer from './tabbars'

const rootReducer = combineReducers({
  articles: articlesReducer,
  sticky: stickyArticlesReducer,
  tabbars: tabbarsReducer
})

export default rootReducer
