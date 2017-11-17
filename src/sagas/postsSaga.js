import { put, fork, take, call } from 'redux-saga/effects'
import {
  GET_POSTS_REQUEST,
  GET_STICKYPOSTS_REQUEST
} from '../constants/actionTypes'
import * as action from '../actions'
import { getPosts, getStickyPosts } from '../services/api'

function* getPostsWorker(payload) {
  try {
    const response = yield call(getPosts, payload)
    yield put(action.getPostsSuccess(response.data))
  } catch (error) {
    yield put(action.getPostsSuccess(error))
  }
}

function* watchPosts() {
  while (true) {
    const { payload } = yield take(GET_POSTS_REQUEST)
    yield fork(getPostsWorker, payload)
  }
}

function* getStickyPostsWorker() {
  try {
    const response = yield call(getStickyPosts)
    yield put(action.getStickyPostsSuccess(response.data))
  } catch (error) {
    yield put(action.getStickyPostsFailed(error))
  }
}

function* watchStickyPosts() {
  while (true) {
    yield take(GET_STICKYPOSTS_REQUEST)
    yield fork(getStickyPostsWorker)
  }
}

export { watchPosts, watchStickyPosts }
