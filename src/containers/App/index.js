import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getPostsRequest } from '../../actions'

class App extends Component {
  componentDidMount = () => {
    this.props.getPosts({})
  }
  
  render() {
    const { postsList } = this.props
    return (
      <div>
        <h1>APP</h1>
        {
          postsList.map((item) => (<h1 key={item.id}>{item.title.rendered}</h1>))
        }
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
    getPosts: (payload) => {
      dispatch(getPostsRequest(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)