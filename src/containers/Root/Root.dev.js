import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { MyNavBar } from '../../components'
//import DevTools from '../DevTools/DevTools'
import { App, Home, Articles, Jokes, Pictures, Detail, Login, Account } from '../index'

class Root extends Component {
  render() {
    const { store } = this.props
    const history = store.history
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <div>
              <MyNavBar navbar={this.props.navbar} history={history} />
              <Switch>
                <Route exec path="/article/:id" component={Detail} />
                <Route exec path="/joke/:id" component={Detail} />
                <Route exec path="/picture/:id" component={Detail} />
                <Route exec path="/login" component={Login} />
                <Route exec path="/account" component={Account} />
                <App history={history}>
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

const mapStateToProps = (state, ownProps) => {
  return {
    navbar: state.root.navbar
  }
}

export default connect(mapStateToProps)(Root)
