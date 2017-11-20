import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getJokesRequest } from '../../actions'

class Joke extends Component {
  componentDidMount() {
    this.props.getJokes({})
  }

  render() {
    const { jokes } = this.props
    console.log(jokes)
    return (
      <div>
        <h1>Joke</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    jokes: state.root.jokes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getJokes: payload => {
      dispatch(getJokesRequest(payload))
    }
  }
}

Joke.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(Joke)
