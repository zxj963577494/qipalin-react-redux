import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import DevTools from '../DevTools/DevTools'
import App from '../App'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.onUpdate = this.onUpdate.bind(this)
  }
  onUpdate() {
    // const { store } = this.props
  }
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history} onUpdate={this.onUpdate}>
            <Route path="/" component={App} />
          </Router>
          <DevTools />
        </div>
      </Provider>
    )
  }
}
