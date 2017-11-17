import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Flex, WhiteSpace } from 'antd-mobile'
import { getPostsRequest, getStickyPostsRequest } from '../../actions'
import styles from './Home.scss'

class Home extends Component {
  componentDidMount() {
    this.props.getPosts({})
    this.props.getStickyPosts()
  }

  render() {
    const { sticky, postsList } = this.props
    console.log(styles)
    return (
      <div>
        <WhiteSpace size="md" />
        {sticky.isShowLogo ? (
          <div className={styles.header}>
            <Flex>
              <img src={sticky.default.pic} alt={sticky.default.title} />
            </Flex>
            <Flex>{sticky.default.title}</Flex>
          </div>
        ) : (
          <Flex>123123</Flex>
        )}

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

Home.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
