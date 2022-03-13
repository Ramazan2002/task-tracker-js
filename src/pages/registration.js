import React from 'react';
import StyledInput, {FileUploader} from '../components/inputField';
import Wrapper from "../components/wrapper";
import Button from "../components/buttons";
import Block from "../components/block";
import Header from "../components/header";
import validateEmail from "../validators/EmailValidator";

function Registration() {

  function onBlurHandlerEmail(e) {
    e.target.value = e.target.value.trim();
    let parent = e.target.parentNode;
    if (!validateEmail(e.target.value)) {
      if (parent.lastChild === e.target) {
        let space = document.createElement('br');
        let message = document.createElement('span');
        message.style = "color: palevioletred";
        message.textContent = 'Email field is wrong';
        parent.appendChild(space);
        parent.appendChild(message);
      }
    } else if (!(parent.lastChild === e.target)){
      parent.lastChild.remove();
    }
  }

  return (
    <Wrapper>
      <Header fontSize="4em">Task-tracker</Header>
      <Header fontSize="3em">
        Registration Page
      </Header>
      <form>
        <Block>
          <StyledInput Margin="5px" placeholder="Your email" type="text" label="Email:"
                       onChange={e => console.log("Content in login field has changed")}
                       onBlur={onBlurHandlerEmail} required>
          </StyledInput>
        </Block>
        <Block>
          <StyledInput Margin="5px" placeholder="First name" type="text" label="First name"
                       onChange={e => console.log("Content in login field has changed")}
                       onBlur={e => e.target.value = e.target.value.trim()} minLength="3" required>
          </StyledInput>
        </Block>
        <Block>
          <StyledInput Margin="5px auto 0px" placeholder="Last name" type="text" label="Last name"
                       onChange={e => console.log("Content in login field has changed")}
                       onBlur={e => e.target.value = e.target.value.trim()} minLength="3" required>
          </StyledInput>
        </Block>
        <Block>
          <FileUploader accept="image/*"></FileUploader>
        </Block>
        <Button style={{margin: '0.1em'}}>Sign Up</Button>
      </form>
    </Wrapper>
  );
}

export default Registration;
