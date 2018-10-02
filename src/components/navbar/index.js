import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from '../../shared/styles'
import { Row, Col } from '../../shared/grid'

const Nav = styled.nav`
  height: 50px;
  border-bottom: 1px solid #ccc;

  line-height: 50px
`

export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Container>
          <Row>
            <Col span={4}>
              80%
            </Col>
            <Col span={1}>
              20%
            </Col>
          </Row>
        </Container>
      </Nav>
    ) 
  }
}