import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavBar, TabBar } from 'antd-mobile'

export default class MyTabBar extends Component {
  render() {
    const {children} = this.props
    console.log(this.props)
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
                this.props.navigateTo(item.key)
              }}
            >
            <NavBar>奇葩林</NavBar>
             {this.props.routers}
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
  changeTabBar: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
  routers: PropTypes.object.isRequired
}
