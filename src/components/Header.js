import styled from 'styled-components'

const Header = styled.header`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color || 'palevioletred'};
  padding-bottom: 0.25em;
  margin: 0.15em;
  display: ${(props) => props.display};
`

export default Header
