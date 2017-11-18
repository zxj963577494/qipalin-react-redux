import { fork } from 'redux-saga/effects'
import { watchArticles, watchStickyArticles } from './articleSaga'

export default function* rootSaga() {
  yield [fork(watchArticles), fork(watchStickyArticles)]
}
