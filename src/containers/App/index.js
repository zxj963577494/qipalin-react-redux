import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar, Icon } from 'antd-mobile'
import { getPostsRequest, changeTabBar } from '../../actions'
import { MyTabBar } from '../../components'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.getPosts({})
  }

  render() {
    const { postsList } = this.props
    return (
      <div>
        <NavBar>奇葩林</NavBar>
        <h1>HELLO</h1>
        <MyTabBar />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    postsList: state.root.posts.postsList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPosts: payload => {
      dispatch(getPostsRequest(payload))
    },
    changeTabBar: payload => {
      dispatch(changeTabBar(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
