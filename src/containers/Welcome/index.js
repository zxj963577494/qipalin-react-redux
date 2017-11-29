import React, { Component } from 'react'
import styles from './style.css'

export default class Welcome extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.replace('/home')
    // }, 1000)
  }
  render() {
    return (
      <div className={styles['container']}>
        <div className={styles['wrapp']}>
          <div className={styles['k-line'] + ' ' + styles['k-line6-1']} />
          <div className={styles['k-line'] + ' ' + styles['k-line6-2']} />
          <div className={styles['k-line'] + ' ' + styles['k-line6-3']} />
          <div className={styles['k-line'] + ' ' + styles['k-line6-4']} />
          <div className={styles['k-line'] + ' ' + styles['k-line6-5']} />
        </div>
      </div>
    )
  }
}
