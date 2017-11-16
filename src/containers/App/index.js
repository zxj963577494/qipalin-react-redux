import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import { MyTabBar } from '../../components'
import { changeTabBar } from '../../actions'
import { push } from 'react-router-redux'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.navigateTo('/duanzi')
  }
  render() {
    return (
      <div>
        <NavBar>奇葩林</NavBar>
        <button onClick={()=>alert(123)}>Home</button>
        <button onClick={this.handleClick}>Apply</button>
        <MyTabBar
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
