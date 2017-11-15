import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Root } from './containers'
import rootSaga from './sagas'
import configureStore from './store'
import getRoutes from './routes'
import registerServiceWorker from './registerServiceWorker'

const history = createHistory()
const store = configureStore({})

store.runSaga(rootSaga)

ReactDOM.render(
  <Root store={store} history={history} router={getRoutes()} />,
  document.getElementById('root')
)
registerServiceWorker()

if (process.env.NODE_ENV !== 'production') {
  window.React = React // enable debugger
}
