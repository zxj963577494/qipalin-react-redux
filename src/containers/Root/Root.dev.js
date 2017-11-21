import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
//import DevTools from '../DevTools/DevTools'
import { App, Home, Articles, Jokes, Pictures, Detail } from '../index'

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={store.history}>
            <div>
              <NavBar
                style={{ position: 'fixed', width: '100%', height: '7%' }}
              >
                奇葩林
              </NavBar>
              <Switch>
                <Route exec path="/detail/:id" component={Detail} />
                <App history={store.history}>
                  <Route exec path="/home" component={Home} />
                  <Route exec path="/articles" component={Articles} />
                  <Route exec path="/jokes" component={Jokes} />
                  <Route exec path="/pictures" component={Pictures} />
                </App>
              </Switch>
            </div>
          </Router>
          {/* <DevTools /> */}
        </div>
      </Provider>
    )
  }
}
