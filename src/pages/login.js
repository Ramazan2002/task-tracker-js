import React from 'react';
import InputField from '../components/inputField.js';
import Wrapper from "../components/wrapper";
import Button from "../components/buttons";
import Block from "../components/block";
import Header from "../components/header";

function Login() {
  return (
    <Wrapper>
      <Header>
        Login Page
      </Header>
      <form>
        <Block>
          <InputField placeholder="Your login" type="text" label="Login:" onChange={e => e.target.value += "Хоба"}
                            onBlur={e => e.target.value.trim()}>
          </InputField>
        </Block>
        <Block>
          <InputField placeholder="Your password" type="password" label="Password:"
                            onChange={e => console.log("Content in password field has changed")}
                            onBlur={e => e.target.value.trim()}>
          </InputField>
        </Block>
        <Button>Sign Up</Button>
      </form>
    </Wrapper>
  );
}

export default Login;
