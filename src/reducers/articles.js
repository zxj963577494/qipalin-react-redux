import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILED,
  GET_ARTICLE_DETAIL_REQUEST,
  GET_ARTICLE_DETAIL_SUCCESS,
  GET_ARTICLE_DETAIL_FAILED,
  GET_STICKY_ARTICLES_REQUEST,
  GET_STICKY_ARTICLES_SUCCESS,
  GET_STICKY_ARTICLES_FAILED
} from '../constants/actionTypes'

const initialArticlesState = {
  list: [],
  isFetching: false,
  pageIndex: 1,
  pageNum: 10
}

const initialArticleState = {
  article: {},
  isFetching: false
}

const initialStickyArticlesState = {
  list: [],
  isShowLogo: true,
  isFetching: false,
  default: {
    pic: require('../assets/images/logo.png'),
    title: '汇聚各种奇闻趣事的分享社区'
  }
}

function articlesReducer(state = initialArticlesState, action) {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return { ...state, isFetching: true }
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.payload),
        isFetching: false
      }
    case GET_ARTICLES_FAILED:
      return { ...state, isFetching: false }
    default:
      return { ...state, isFetching: false }
  }
}

function articleReducer(state = initialArticleState, action) {
  switch (action.type) {
    case GET_ARTICLE_DETAIL_REQUEST:
      return { ...state, isFetching: true }
    case GET_ARTICLE_DETAIL_SUCCESS:
      return {
        ...state,
        article: action.payload[0],
        isFetching: false
      }
    case GET_ARTICLE_DETAIL_FAILED:
      return { ...state, isFetching: false }
    default:
      return { ...state, isFetching: false }
  }
}

function stickyArticlesReducer(state = initialStickyArticlesState, action) {
  switch (action.type) {
    case GET_STICKY_ARTICLES_REQUEST:
      return { ...state, isFetching: true }
    case GET_STICKY_ARTICLES_SUCCESS:
      if (action.payload.length > 0) {
        return {
          ...state,
          list: state.list.slice(0, 1).concat(action.payload),
          isFetching: false,
          isShowLogo: false
        }
      } else {
        return { ...state, isFetching: false }
      }
    case GET_STICKY_ARTICLES_FAILED:
      return { ...state, isFetching: false }
    default:
      return { ...state, isFetching: false }
  }
}

export { articlesReducer, stickyArticlesReducer, articleReducer }
