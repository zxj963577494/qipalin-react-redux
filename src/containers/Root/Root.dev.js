import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route } from 'react-router-dom'
//import DevTools from '../DevTools/DevTools'
import routes from '../../routes'
import { App, Home, Article, Duanzi, Picture } from '../index'

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={store.history}>
            <App history={store.history}>
              <Route exec path="/home" component={Home} />
              <Route exec path="/article" component={Article} />
              <Route exec path="/duanzi" component={Duanzi} />
              <Route exec path="/picture" component={Picture} />
            </App>
          </Router>
          {/* <DevTools /> */}
        </div>
      </Provider>
    )
  }
}
