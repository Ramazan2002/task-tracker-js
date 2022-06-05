import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  font-size: ${(props) => props.fontSize};
  color: palevioletred;
  padding: 5px;
  text-decoration: none;
  :hover {
    color: ${(props) => (props.primary ? "white" : "green")};
  }
`;

export default StyledLink;
