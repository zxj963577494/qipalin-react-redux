import { fork } from 'redux-saga/effects'
import { watchPosts, watchStickyPosts } from './postsSaga'

export default function* rootSaga() {
  yield [fork(watchPosts), fork(watchStickyPosts)]
}
