import { combineReducers } from 'redux'
import { articlesReducer, stickyArticlesReducer, articleReducer } from './articles'
import tabbarsReducer from './tabbars'

const rootReducer = combineReducers({
  articles: articlesReducer,
  article: articleReducer,
  sticky: stickyArticlesReducer,
  tabbars: tabbarsReducer
})

export default rootReducer
