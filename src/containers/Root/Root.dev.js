import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
//import DevTools from '../DevTools/DevTools'
import routes from '../../routes'
import { App, Home, Article, Duanzi, Picture, ArticleDetail } from '../index'

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={store.history}>
            <div>
              <NavBar style={{position: 'fixed',width: '100%',height: '7%'}}>奇葩林</NavBar>
              <Switch>
                <Route
                  exec
                  path="/article/:id"
                  type={123}
                  component={ArticleDetail}
                />
                <App history={store.history}>
                  <Route exec path="/home" component={Home} />
                  <Route exec path="/article" component={Article} />
                  <Route exec path="/duanzi" component={Duanzi} />
                  <Route exec path="/picture" component={Picture} />
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
