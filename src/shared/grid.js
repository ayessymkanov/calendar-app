import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align || 'center'};
`

export const Col = styled.div`
  flex: ${props => props.span};
  align-self: ${props => props.center ? 'center' : 'flex-start'};
`
