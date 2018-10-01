import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Main extends Component {
  render () {
    return (
      <Fragment>
        <h1>Main Route</h1>
        <Link to='/login'>Login</Link>
      </Fragment>
    )
  }
}
