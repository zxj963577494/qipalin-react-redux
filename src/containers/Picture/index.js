import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPicturesRequest } from '../../actions'

class Picture extends Component {
  componentDidMount() {
    this.props.getPictures({ page: 1, t: 'pictures' })
  }

  render() {
    const { pictures, navigateTo, getPictures } = this.props
    return (
      <div>
        <h1>Picture</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pictures: state.root.pictures
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPictures: payload => {
      dispatch(getPicturesRequest(payload))
    }
  }
}

Picture.propTypes = {
  pictures: PropTypes.object.isRequired,
  getPictures: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Picture)
