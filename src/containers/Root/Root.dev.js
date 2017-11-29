import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import { MyNavBar } from '../../components'
//import DevTools from '../DevTools/DevTools'
import {
  App,
  Home,
  Articles,
  Jokes,
  Pictures,
  Detail,
  Login,
  Account,
  Welcome
} from '../index'

class Root extends Component {
  render() {
    const { store } = this.props
    const history = store.history
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Switch>
              <Route exec path="/" component={Welcome} />
              <MyNavBar navbar={this.props.navbar} history={history} />
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
