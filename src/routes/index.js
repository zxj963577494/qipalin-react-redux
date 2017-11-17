import React from 'react'
import { Route } from 'react-router-dom'
import { Home, Article, Duanzi, Picture } from '../containers'

export default () => {
  const routes = (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/article" component={Article} />
      <Route exact path="/duanzi" component={Duanzi} />
      <Route exact path="/picture" component={Picture} />
    </div>
  )
  return routes
}
