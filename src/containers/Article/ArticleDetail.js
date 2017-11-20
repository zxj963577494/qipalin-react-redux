import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile';
import { getArticleDetailRequest } from '../../actions'
import { MyListView } from '../../components'

class ArticleDetail extends Component {
  constructor(props) {
    super(props)

    console.log(props)
  }

  componentDidMount() {
    this.props.getArticleDetail(this.props.match.params.id)
    console.log(this.props);
  }

  render() {
    const {article, isFetching} = this.props.article
    console.log(article)
    return (
      <div
        style={{ position: 'fixed', height: '93%', width: '100%', top: '7%' }}
      >
          {isFetching ? (
            <ActivityIndicator toast text="加载中..." />
          ):''}
        <h1>ArticleDetail</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    article: state.root.article
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getArticleDetail: (id) => {
      dispatch(getArticleDetailRequest({include: id}))
    }
  }
}

ArticleDetail.propTypes = {
  article: PropTypes.object.isRequied,
  getArticleDetail: PropTypes.func.isRequied
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
