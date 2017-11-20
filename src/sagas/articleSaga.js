import { put, fork, take, call } from 'redux-saga/effects'
import {
  GET_ARTICLES_REQUEST,
  GET_STICKY_ARTICLES_REQUEST,
  GET_ARTICLE_DETAIL_REQUEST
} from '../constants/actionTypes'
import * as action from '../actions'
import { getArticles, getStickyArticles, getArticleDetail } from '../services/api'

function* getArticlesWorker(payload) {
  try {
    const response = yield call(getArticles, payload)
    yield put(action.getArticlesSuccess(response.data))
  } catch (error) {
    yield put(action.getArticlesSuccess(error))
  }
}

function* getStickyArticlesWorker() {
  try {
    const response = yield call(getStickyArticles)
    yield put(action.getStickyArticlesSuccess(response.data))
  } catch (error) {
    yield put(action.getStickyArticlesFailed(error))
  }
}

function* getArticleDetailWorker(payload) {
  try {
    const response = yield call(getArticleDetail, payload)
    yield put(action.getArticleDetailSuccess(response.data))
  } catch (error) {
    yield put(action.getArticleDetailSuccess(error))
  }
}

function* watchStickyArticles() {
  while (true) {
    yield take(GET_STICKY_ARTICLES_REQUEST)
    yield fork(getStickyArticlesWorker)
  }
}

function* watchArticles() {
  while (true) {
    const { payload } = yield take(GET_ARTICLES_REQUEST)
    yield fork(getArticlesWorker, payload)
  }
}

function* watchArticleDetail() {
  while (true) {
    const { payload } = yield take(GET_ARTICLE_DETAIL_REQUEST)
    yield fork(getArticleDetailWorker, payload)
  }
}

export { watchArticles, watchStickyArticles, watchArticleDetail }
