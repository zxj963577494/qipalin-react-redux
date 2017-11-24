import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comments extends Component {
  render() {
    console.log(this.props.comments)
    if(!this.props.comments) {
      return ''
    }
    return (
      <div>
        <ul>
          {
            this.props.comments.map((item)=>{
              return (<li key={item.id}>{item.content.rendered}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.object.isRequired,
  getComments: PropTypes.func.isRequired
}