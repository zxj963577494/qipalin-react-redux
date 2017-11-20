import { fork } from 'redux-saga/effects'
import {
  watchArticles,
  watchStickyArticles,
  watchArticleDetail
} from './articleSaga'
import { watchJokes } from './jokeSaga'

export default function* rootSaga() {
  yield [
    fork(watchArticles),
    fork(watchStickyArticles),
    fork(watchArticleDetail),
    fork(watchJokes)
  ]
}
