import { put, fork, take, call } from 'redux-saga/effects'
import {
  GET_POSTS_REQUEST
} from '../constants/actionTypes'
import * as action from '../actions'
import { getPosts } from '../services/api'

function* posts(payload) {
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
    yield fork(posts, payload)
  }
}

export default watchPosts