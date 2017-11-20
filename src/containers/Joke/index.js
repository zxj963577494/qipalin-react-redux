import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getArticlesRequest } from '../../actions'

class Joke extends Component {
  componentDidMount() {
    //this.props.getArticles({})
  }

  render() {
    return (
      <div>
        <h1>Joke</h1>
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

Joke.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Joke)
