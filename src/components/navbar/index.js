import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from '../contextMenu'
import { Container } from '../../shared/styles'
import { Row, Col } from '../../shared/grid'

const Nav = styled.nav`
  height: 50px;
  border-bottom: 1px solid #ccc;

  line-height: 50px
`

export default class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuVisible: false
    }
  }

  toggleMenu = () => this.setState((prevState) => ({ menuVisible: !prevState.menuVisible }))

  showMenu = () => this.setState(() => ({ menuVisible: true }))

  hideMenu = () => this.setState(() => ({ menuVisible: false }))

  render () {
    return (
      <Nav>
        <Container>
          <Row>
            <Col span={4}>
              80%
            </Col>
            <Col span={1} style={{ border: '1px solid black' }}>
              <button onClick={this.toggleMenu}>menu</button>
              <Menu visible={this.state.menuVisible} hide={this.hideMenu} />
            </Col>
          </Row>
        </Container>
      </Nav>
    )
  }
}
