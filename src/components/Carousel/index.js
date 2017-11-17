import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd-mobile'
import styles from './Carousel.css'

let MyCarousel = props => {
  return (
    <Carousel
      className={styles.carousel}
      autoplay={false}
      infinite
      selectedIndex={1}
      swipeSpeed={35}
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
    >
    </Carousel>
  )
}

MyCarousel.propTypes = {
  
}

export default MyCarousel
