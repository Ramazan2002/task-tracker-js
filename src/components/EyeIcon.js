import styled from 'styled-components'

const Icon = styled.i`
  color: ${(props) => (props.green === 'green' ? 'green' : 'palevioletred')};
  position: relative;
  right: 10%;
  :hover {
    color: green;
    cursor: pointer;
  }
`

export default Icon
