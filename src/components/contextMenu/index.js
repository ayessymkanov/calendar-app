import React, { Component } from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'

const Menu = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  border-top: none;
`

const MenuItem = styled.div`
  white-space: nowrap;
`

class ContextMenu extends Component {
  handleClickOutside = event => {
    if (event.clientY > 40) {
      this.props.hide()
    }
  }
  render () {
    const { visible } = this.props
    return visible ? (
      <Menu>
        <MenuItem>menu itemasdn asdjnajksdn </MenuItem>
        <MenuItem>menu item</MenuItem>
        <MenuItem>menu item</MenuItem>
        <MenuItem>menu item</MenuItem>
      </Menu>
    ) : null
  }
}

export default onClickOutside(ContextMenu)
