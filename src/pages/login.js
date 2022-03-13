import React, {useState} from 'react';
import StyledInput from '../components/inputField';
import Wrapper from "../components/wrapper";
import Button from "../components/buttons";
import Block from "../components/block";
import Header from "../components/header";
import Icon from "../components/eyeIcon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import validateEmail from "../validators/EmailValidator";
import validatePassword from "../validators/PasswordValidator";
import buttons from "../components/buttons";

function Login() {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = (e) => {
    setPasswordShown(!passwordShown);
    const tag = document.getElementsByName("password");
    tag.setAttribute("green", "green");
  }

  function onBlurHandlerLogin(e) {
    e.target.value = e.target.value.trim();
    let parent = e.target.parentNode;
    let submitButton = document.querySelector("button");
    if (!validateEmail(e.target.value)) {
      if (parent.lastChild === e.target) {
        let space = document.createElement('br');
        let message = document.createElement('span');
        message.style = "color: palevioletred";
        message.textContent = 'Login field is wrong';
        parent.appendChild(space);
        parent.appendChild(message);
        submitButton.disabled = true;
      }
    } else if (!(parent.lastChild === e.target)){
      parent.lastChild.remove();
      parent.lastChild.remove();
      submitButton.disabled = false;
    }
  }

  function onBlurHandlerPassword(e) {
    e.target.value = e.target.value.trim();
    let parent = e.target.parentNode;
    let submitButton = document.querySelector("button");
    if (!validatePassword(e.target.value)) {
      if (parent.lastChild.nodeName !== "SPAN") {
        let space = document.createElement('br');
        let message = document.createElement('span');
        message.style = "color: palevioletred";
        message.textContent = 'Password field is wrong';
        parent.appendChild(space);
        parent.appendChild(message);
        submitButton.disabled = true;
      }
    } else if (parent.lastChild.nodeName === "SPAN") {
      parent.lastChild.remove();
      parent.lastChild.remove();
      submitButton.disabled = false;
    }
  }

  return (
    <Wrapper>
      <Header fontSize="4em">Task-tracker</Header>
      <Header fontSize="3em">
        Login Page
      </Header>
      <form>
        <Block>
          <StyledInput Margin="10px" placeholder="Your login" type="text" label="Login:"
                       onChange={e => console.log("Content in login field has changed")}
                       onBlur={onBlurHandlerLogin} required>
          </StyledInput>
        </Block>
        <Block>
          <StyledInput Margin="10px 0px 10px 15px" placeholder="Your password" type={passwordShown ? "text" : "password"}
                       label="Password:" onChange={e => console.log("Content in password field has changed")}
                       onBlur={onBlurHandlerPassword}>
          </StyledInput>
          <Icon onClick={togglePasswordVisibility}>{eye}</Icon>
        </Block>
        <Button>Sign In</Button>
      </form>
    </Wrapper>
  );
}

export default Login;
