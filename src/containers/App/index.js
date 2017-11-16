import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import { MyTabBar } from '../../components'
import { changeTabBar } from '../../actions'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar>奇葩林</NavBar>
        <div>{this.props.children}</div>
        <MyTabBar tabbars = {this.props.tabbars} changeTabBar = {this.props.changeTabBar} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tabbars: state.root.tabbars
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeTabBar: payload => {
      dispatch(changeTabBar(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
