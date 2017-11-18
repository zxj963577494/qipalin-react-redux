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
      {props.content.map(item => (
        <a key={item.id}>
          <img
            src={item.thumbnail}
            alt={item.title.rendered}
            style={{height:'200px',width: '100%'}}
          />
        </a>
      ))}
    </Carousel>
  )
}

MyCarousel.propTypes = {
  content: PropTypes.array.isRequired,
}

export default MyCarousel
