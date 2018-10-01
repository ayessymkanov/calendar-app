import React from 'react'
import { Router, Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import Main from './routes/Main'
import Auth from './routes/Auth'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Auth} />
    </Switch>
  </BrowserRouter>
)