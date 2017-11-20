import { fork } from 'redux-saga/effects'
import { watchArticles, watchStickyArticles, watchArticleDetail } from './articleSaga'

export default function* rootSaga() {
  yield [fork(watchArticles), fork(watchStickyArticles), fork(watchArticleDetail)]
}
