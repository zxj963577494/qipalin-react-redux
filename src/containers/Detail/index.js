import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getDetailRequest, getCommentsRequest } from '../../actions'
import { Content, MyActivityIndicator, Comments } from '../../components'
import styles from './style.css'

class Detail extends Component {
  componentDidMount() {
    this.props.getDetail(
      this.props.match.params.id,
      this.props.match.path.includes('picture') ? 1 : 0
    )
    this.props.getComments({ post: this.props.match.params.id })
  }

  render() {
    const { detail, isFetching } = this.props.detail
    return (
      <div className={styles.content}>
        <MyActivityIndicator isFetching={isFetching} />
        <Content content={detail} />
        <Comments
          comments={this.props.comments}
          getComments={this.props.getComments}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    detail: state.root.detail,
    comments: state.root.detail.detail.id
      ? state.root.comments.list.filter(x => x.post === state.root.detail.detail.id)
      : []
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDetail: (id, t) => {
      dispatch(getDetailRequest({ include: id, t: t }))
    },
    getComments: payload => {
      dispatch(getCommentsRequest(payload))
    }
  }
}

Detail.propTypes = {
  detail: PropTypes.object.isRequired,
  getDetail: PropTypes.func.isRequired,
  comments: PropTypes.object.isRequired,
  getComments: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
