import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'

export default class MyTabBar extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
    console.log(this.context)
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        H!!!!!
      </div>
    )
  }
}