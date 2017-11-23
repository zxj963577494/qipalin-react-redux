import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile'
import { getDetailRequest } from '../../actions'
import { Content } from '../../components'
import styles from './style.css'

class Detail extends Component {
  componentDidMount() {
    this.props.getDetail(
      this.props.match.params.id,
      this.props.match.path.includes('picture') ? 1 : 0
    )
  }

  render() {
    const { detail, isFetching } = this.props.detail
    console.log(this.props.detail)
    return (
      <div
        style={{ position: 'fixed', height: '93%', width: '100%', top: '7%' }}
      >
        {isFetching ? <ActivityIndicator toast text="加载中..." /> : ''}
        <Content content={detail} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    detail: state.root.detail
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDetail: (id, t) => {
      dispatch(getDetailRequest({ include: id, t: t }))
    }
  }
}

Detail.propTypes = {
  detail: PropTypes.object.isRequired,
  getDetail: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
