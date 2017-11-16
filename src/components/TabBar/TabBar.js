import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'

export default class MyTabBar extends Component {
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {this.props.tabbars.map(item => (
            <TabBar.Item
              title={item.title}
              key={item.key}
              icon={this.renderIcon(item.icon)}
              selectedIcon={this.renderIcon(item.selectedIcon)}
              selected={item.selected}
              onPress={()=>{
                this.props.changeTabBar(item.key)
              }}
            >
            </TabBar.Item>
          ))}
        </TabBar>
      </div>
    )
  }

  renderIcon(imgUrl) {
    return (
      <div
        style={{
          width: '22px',
          height: '22px',
          background: 'url('+ imgUrl + ') center center /  21px 21px no-repeat'
        }}
      />
    )
  }
}

MyTabBar.propTypes = {
  tabbars: PropTypes.array.isRequired,
  changeTabBar: PropTypes.func.isRequired
}
