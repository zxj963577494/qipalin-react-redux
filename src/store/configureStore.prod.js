import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import CreateSagaMiddleware, { END } from 'redux-saga'
import {
  routerReducer,
  routerMiddleware
} from 'react-router-redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const sagaMiddleware = CreateSagaMiddleware()
  const history = createHistory()
  const routeMiddleware = routerMiddleware(history)
  const store = createStore(
    combineReducers({
      ...rootReducer,
      router: routerReducer
    }),
    initialState,
    applyMiddleware(sagaMiddleware, routeMiddleware)
  )
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
