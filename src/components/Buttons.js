import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: ${(props) => props.fontSize || "1em"};
  margin: ${(props) => props.margin};
  padding: 0.4em 1em;
  border: 2px solid palevioletred;
  border-radius: 7px;
  cursor: pointer;
  :hover {
    color: ${(props) => (props.primary ? "white" : "green")};
    border-color: ${(props) => (props.primary ? "palevioletred" : "green")};
    transform: scale(1.15);
    transition-duration: 0.5s;
    opacity: 0.9;
  }
`;

export default Button;
