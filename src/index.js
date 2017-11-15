import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Root } from './containers'
import rootSaga from './sagas'
import configureStore from './store'
import registerServiceWorker from './registerServiceWorker'

const history = createHistory()
const store = configureStore({})

store.runSaga(rootSaga)

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
)
registerServiceWorker()