import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getArticlesRequest } from '../../actions'
import { MyListView } from '../../components'

class Article extends Component {
  componentDidMount() {
    this.props.getArticles({})
  }

  render() {
    return (
      <MyListView articles={this.props.articles} />
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
    getArticles: payload => {
      dispatch(getArticlesRequest(payload))
    }
  }
}

Article.propTypes = {
  articles: PropTypes.object.isRequired,
  getArticles: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
