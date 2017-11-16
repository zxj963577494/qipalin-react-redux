import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'

export default class MyTabBar extends Component {
  constructor(props) {
    super(props)
  }
  changeTabBar(key) {
    //this.props.changeTabBar(key)
  }
  render() {
    return (
      <div className="tabbar">
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
            />
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
          backgroundImage: 'url(' + imgUrl + ')'
        }}
      />
    )
  }
}

MyTabBar.propTypes = {
  tabbars: PropTypes.array.isRequired,
  changeTabBar: PropTypes.func.isRequired
}
