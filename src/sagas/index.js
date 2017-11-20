import { fork } from 'redux-saga/effects'
import {
  watchArticles,
  watchStickyArticles
} from './articlesSaga'
import { watchJokes } from './jokesSaga'
import { watchPictures } from './picturesSaga'
import { watchDetail } from './detailSaga'

export default function* rootSaga() {
  yield [
    fork(watchArticles),
    fork(watchStickyArticles),
    fork(watchDetail),
    fork(watchJokes),
    fork(watchPictures)
  ]
}
