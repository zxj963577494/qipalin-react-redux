import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { MyTabBar } from '../../components'
import { changeTabBar } from '../../actions'
import getRouter from '../../routes'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <MyTabBar
          routers={getRouter()}
          tabbars={this.props.tabbars}
          changeTabBar={this.props.changeTabBar}
          navigateTo={this.props.navigateTo}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tabbars: state.root.tabbars,
    location: state.location
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeTabBar: payload => {
      dispatch(changeTabBar(payload))
    },
    navigateTo: location => {
      dispatch(push(location))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
