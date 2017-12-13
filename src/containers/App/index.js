import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { MyTabBar } from '../../components'
import { changeTabBar } from '../../actions'
// eslint-disable-next-line
import globalcss from '../../assets/css/style.css'

class App extends Component {
  componentDidMount() {
    // 请求根目录是转至/home
    if (this.props.history.location.pathname === '/') {
      setTimeout(() => {
        this.props.history.replace('/home')
      }, 0)
    }
  }

  render() {
    return (
      <div>
        <MyTabBar
          history={this.props.history}
          children={this.props.children}
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
