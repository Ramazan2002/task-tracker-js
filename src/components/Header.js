import styled from 'styled-components'

const Header = styled.header`
  text-align: center;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color || '#ffa3f7'};
  padding-bottom: 0.25em;
  margin: 0.15em;
  float: ${(props) => props.float};
  display: ${(props) => props.display};
`

export default Header
