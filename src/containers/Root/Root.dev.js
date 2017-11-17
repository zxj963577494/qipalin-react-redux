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
            <div>
              <Route path="/" component={App} />
              <Route path="/home" component={Home} />
              <Route path="/article" component={Article} />
              <Route path="/duanzi" component={Duanzi} />
              <Route path="/picture" component={Picture} />
            </div>
          </Router>
          {/* <DevTools /> */}
        </div>
      </Provider>
    )
  }
}
