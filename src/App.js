import React from 'react'
import Routes from './Router'
import Navbar from './components/navbar'
import { AppContainer, Container } from './shared/styles'
import resetStyles from './resetStyles'

export default () => {
  resetStyles()
  return (
    <AppContainer>
      <Navbar />
      <Container>
        <Routes />
      </Container>
    </AppContainer>
  )
}
