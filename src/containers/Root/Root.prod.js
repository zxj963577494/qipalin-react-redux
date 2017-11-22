import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import { connect } from 'react-redux'
import { MyNavBar } from '../../components'
import { App, Home, Articles, Jokes, Pictures, Detail } from '../index'

class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={store.history}>
            <div>
              <MyNavBar navbar={this.props.navbar} />
              <Switch>
                <Route exec path="/article/:id" component={Detail} />
                <Route exec path="/joke/:id" component={Detail} />
                <Route exec path="/picture/:id" component={Detail} />
                <App history={store.history}>
                  <Route exec path="/home" component={Home} />
                  <Route exec path="/articles" component={Articles} />
                  <Route exec path="/jokes" component={Jokes} />
                  <Route exec path="/pictures" component={Pictures} />
                </App>
              </Switch>
            </div>
          </Router>
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
