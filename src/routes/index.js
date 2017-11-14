import React from 'react'
import { Route } from 'react-router'
import { App } from 'containers'

export default () => {
  const routes = (
    <div>
      <Route exact path="/" component={App} />
    </div>
  )
  return routes
}
