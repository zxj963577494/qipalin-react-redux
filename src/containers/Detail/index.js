import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile';
import { getDetailRequest } from '../../actions'

class Detail extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id, this.props.match.path.includes('picture') ? 1 : 0)
    console.log(this.props);
  }

  render() {
    const {detail, isFetching} = this.props.detail
    console.log(detail)
    return (
      <div
        style={{ position: 'fixed', height: '93%', width: '100%', top: '7%' }}
      >
          {isFetching ? (
            <ActivityIndicator toast text="加载中..." />
          ):''}
        <h1>Detail</h1>
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
      dispatch(getDetailRequest({include: id, t: t}))
    }
  }
}

Detail.propTypes = {
  detail: PropTypes.object,
  getDetail: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
