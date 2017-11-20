import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListView, ActivityIndicator } from 'antd-mobile'
import fonts from '../../assets/font/font.css'
import styles from './ListView.css'
import utils from '../../utils/utils'

export default class MyListView extends Component {
  onEndReached = event => {
    console.log('reach end', event)
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }).cloneWithRows(this.props.articles.list)
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          borderBottom: '1px solid #ECECED'
        }}
      />
    )
    const row = (rowData, sectionID, rowID) => {
      return (
        <div onClick={()=>{this.props.navigateTo('/article/'+ rowData.id)}} key={rowID} style={{ padding: '0 15px' }}>
          <div className={styles['article-row']}>
            <img src={rowData.thumbnail} alt="" />
            <div className={styles['right']}>
              <div className={styles['article-title']}>
                {rowData.title.rendered}
              </div>
              <div className={styles.meta}>
                <span>{utils.cutstr(rowData.date, 10, 1)}</span>
                <span
                  className={
                    fonts.iconfont + ' ' + fonts['icon-attention_light']
                  }
                >
                  {' '}
                  {rowData.pageviews}
                </span>
                <span
                  className={fonts.iconfont + ' ' + fonts['icon-comment_light']}
                >
                  {' '}
                  {rowData.total_comments}
                </span>
                <span
                  className={
                    fonts.iconfont + ' ' + fonts['icon-appreciate_light']
                  }
                >
                  {' '}
                  {rowData.like_count}
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    }
    const fonter = () => {
      console.log('isFetching:' + this.props.articles.isFetching)
      return (
        <div style={{ padding: 5, textAlign: 'center' }}>
          {this.props.articles.isFetching ? (
            <ActivityIndicator toast text="加载中..." />
          ) : (
            '到底了'
          )}
        </div>
      )
    }
    return (
      <ListView
        dataSource={dataSource}
        initialListSize={6}
        renderFooter={fonter}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={10}
        useBodyScroll
        onScroll={() => {
          console.log('scroll')
        }}
        scrollEventThrottle={50}
        scrollRenderAheadDistance={50}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    )
  }
}

MyListView.propTypes = {
  articles: PropTypes.object.isRequired,
  navigateTo: PropTypes.func.isRequired,
}
