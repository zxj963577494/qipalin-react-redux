import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Flex, WhiteSpace } from 'antd-mobile'
import { getPostsRequest, getStickyPostsRequest } from '../../actions'
import {MyCarousel} from '../../components'
import styles from './Home.scss'

class Home extends Component {
  componentDidMount() {
    console.log('componentDidMount')
    this.props.getPosts({})
    this.props.getStickyPosts()
  }

  // 展示LOGO
  renderLogo(sticky) {
    return (
      <div>
        <Flex>
          <img
            src={sticky.default.pic}
            alt={sticky.default.title}
            style={{ height: 60, width: 200 }}
          />
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>{sticky.default.title}</Flex>
      </div>
    )
  }

  // 展示轮播图
  renderCarousel() {
    return (<MyCarousel content={this.props.sticky.list}/>)
  }

  render() {
    const { sticky, postsList } = this.props
    return (
      <div>
        <div className={styles.header}>
          {sticky.isShowLogo ? this.renderLogo(sticky) : this.renderCarousel()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sticky: state.root.sticky,
    postsList: state.root.posts.postsList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPosts: payload => {
      dispatch(getPostsRequest(payload))
    },
    getStickyPosts: () => {
      dispatch(getStickyPostsRequest())
    }
  }
}

Home.propTypes = {
  sticky: PropTypes.object.isRequired,
  postsList: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
  getStickyPosts: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
