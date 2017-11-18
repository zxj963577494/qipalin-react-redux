import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getArticlesRequest } from '../../actions'

class Picture extends Component {
  componentDidMount() {
    this.props.getArticles({})
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
    articles: state.root.articles,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPosts: payload => {
      dispatch(getArticlesRequest(payload))
    }
  }
}

Picture.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Picture)
