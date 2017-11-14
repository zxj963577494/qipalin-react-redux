import has from 'lodash/has'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

export default class Root extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { store, history, routes, type, renderProps } = this.props
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router routes={routes} />
        </ConnectedRouter>
      </Provider>
    )
  }
}
