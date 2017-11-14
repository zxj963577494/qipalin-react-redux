import {put, fork, take, call} from 'redux-saga/effects'

function* init() {
  yield console.log(init)
}

export default function* rootSaga() {
  yield init
}