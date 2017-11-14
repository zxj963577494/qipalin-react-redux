import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import CreateSagaMiddleware, { END } from 'redux-saga'
import { immutableStateInvariant } from 'redux-immutable-state-invariant'
import {
  routerReducer,
  routerMiddleware,
} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'
import DevTools from 'containers/DevTools/DevTools'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const sagaMiddleware = CreateSagaMiddleware()
  const history = createHistory()
  const routeMiddleware = routerMiddleware(history)
  const immutableMiddleware = immutableStateInvariant()
  const loggerMiddleware = createLogger()
  const middlewares = [
    sagaMiddleware,
    routeMiddleware,
    immutableMiddleware,
    loggerMiddleware
  ]
  const enhancers = compose(
    applyMiddleware(...middlewares),
    DevTools.instrument()
  )
  const store = createStore(
    combineReducers({
      ...rootReducer,
      router: routerReducer
    }),
    initialState,
    enhancers
  )
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
