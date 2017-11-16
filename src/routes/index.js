import React from 'react'
import { Route } from 'react-router-dom'
import { Home, Article, Duanzi, Picture } from '../containers'

export default () => {
  const routes = (
    <div>
      <Route path="/home" component={Home} />
      <Route path="/article" component={Article} />
      <Route path="/duanzi" component={Duanzi} />
      <Route path="/picture" component={Picture} />
    </div>
  )
  return routes
}
