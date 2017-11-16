import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPostsRequest } from '../../actions'

class Picture extends Component {
  componentDidMount() {
    this.props.getPosts({})
  }

  render() {
    return (
      <div>
        <h1>Picture</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    postsList: state.root.posts.postsList,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPosts: payload => {
      dispatch(getPostsRequest(payload))
    }
  }
}

Picture.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Picture)
