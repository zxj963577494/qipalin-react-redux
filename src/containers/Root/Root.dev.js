import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import DevTools from '../DevTools/DevTools'
import App from '../App'
import Home from '../Home'
import Article from '../Article'
import Duanzi from '../Duanzi'
import Picture from '../Picture'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <div>
              <Route path="/" component={App} />
              <Route path="/home" component={Home} />
              <Route path="/article" component={Article} />
              <Route path="/duanzi" component={Duanzi} />
              <Route path="/picture" component={Picture} />
            </div>
          </Router>
          <DevTools />
        </div>
      </Provider>
    )
  }
}
