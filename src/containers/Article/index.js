import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getArticlesRequest } from '../../actions'
import { MyListView } from '../../components'

class Article extends Component {
  componentDidMount() {
    this.props.getArticles({ page: 1 })
  }

  render() {
    const {articles, navigateTo, getArticles} = this.props
    return (
      <MyListView articles={articles} navigateTo={navigateTo} getArticles={getArticles}/>
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
    },
    navigateTo: location => {
      dispatch(push(location))
    }
  }
}

Article.propTypes = {
  articles: PropTypes.object.isRequired,
  getArticles: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
