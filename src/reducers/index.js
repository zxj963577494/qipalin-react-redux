import { combineReducers } from 'redux'
import {
  articlesReducer,
  stickyArticlesReducer,
  articleReducer
} from './articles'
import { jokesReducer } from './jokes'
import tabbarsReducer from './tabbars'

const rootReducer = combineReducers({
  articles: articlesReducer,
  jokes: jokesReducer,
  article: articleReducer,
  sticky: stickyArticlesReducer,
  tabbars: tabbarsReducer
})

export default rootReducer
