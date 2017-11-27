import { put, fork, take, call } from 'redux-saga/effects'
import { POST_LOGIN_REQUEST } from '../constants/actionTypes'
import * as action from '../actions'
import { postLogin } from '../services/api'

function* postLoginWorker(payload) {
  try {
    yield put(action.setNavBar({ title: '奇葩林', isCanBack: false }))
    const response = yield call(postLogin, payload)
    yield put(action.postLoginSuccess(response.data))
  } catch (error) {
    yield put(action.postLoginSuccess(error))
  }
}

function* watchLogin() {
  while (true) {
    const { payload } = yield take(POST_LOGIN_REQUEST)
    yield fork(postLoginWorker, payload)
  }
}

export { watchLogin }
