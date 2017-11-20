import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {JokesListView} from '../../components'
import { getJokesRequest } from '../../actions'

class Joke extends Component {
  componentDidMount() {
    this.props.getJokes({})
  }

  render() {
    const { jokes,navigateTo,getJokes } = this.props
    return (
      <JokesListView jokes={jokes} navigateTo={navigateTo} getJokes={getJokes}/>
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

Joke.propTypes = {
  jokes: PropTypes.object.isRequired,
  getJokes: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Joke)
