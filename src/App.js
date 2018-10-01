import React from 'react'
import Routes from './Router'
import { Container } from './shared/styles'
import resetStyles from './resetStyles'

export default () => {
  resetStyles()
  return (
    <Container>
      <Routes />
    </Container>
  )
}