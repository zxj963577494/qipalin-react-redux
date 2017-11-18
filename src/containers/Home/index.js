import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Flex, WhiteSpace } from 'antd-mobile'
import { getArticlesRequest, getStickyArticlesRequest } from '../../actions'
import { MyCarousel, MyListView } from '../../components'
import styles from './Home.css'

class Home extends Component {
  componentDidMount() {
    this.props.getStickyArticles({})
    this.props.getArticles({})
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
    return <MyCarousel content={this.props.sticky.list} />
  }

  render() {
    const { sticky, articles } = this.props
    return (
      <div>
        <div className={styles.header}>
          {sticky.isShowLogo ? this.renderLogo(sticky) : this.renderCarousel()}
        </div>
        <WhiteSpace size="xs" />
        <div>
          <MyListView articles={articles} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sticky: state.root.sticky,
    articles: state.root.articles
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getArticles: payload => {
      dispatch(getArticlesRequest(payload))
    },
    getStickyArticles: () => {
      dispatch(getStickyArticlesRequest())
    }
  }
}

Home.propTypes = {
  sticky: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired,
  getArticles: PropTypes.func.isRequired,
  getStickyArticles: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
