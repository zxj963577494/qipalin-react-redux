import React from 'react'
import { Route } from 'react-router-dom'
import {App} from '../containers'

export default () => {
  const routes = (
    <Route path="/" component={App}/>
  )
  return routes
}
