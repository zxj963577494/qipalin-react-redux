import React from 'react'
import { Route } from 'react-router-dom'
import { App, Home, Article, Joke, Picture } from '../containers'

export default () => {
  const routes = (
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/article" component={Article} />
      <Route exact path="/joke" component={Joke} />
      <Route exact path="/picture" component={Picture} />
    </div>
  )
  return routes
}
