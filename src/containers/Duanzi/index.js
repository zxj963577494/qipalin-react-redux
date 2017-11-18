import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getArticlesRequest } from '../../actions'

class Duanzi extends Component {
  componentDidMount() {
    this.props.getArticles({})
  }

  render() {
    return (
      <div>
        <h1>Duanzi</h1>
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

Duanzi.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Duanzi)
