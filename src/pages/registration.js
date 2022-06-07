import React, {useEffect, useState} from 'react'
import StyledInput from '../components/InputField'
import FileUploader from '../components/UploadFile'
import Wrapper from '../components/Wrapper'
import Button from '../components/Buttons'
import Block from '../components/Block'
import Header from '../components/Header'
import {SignupFormValidator} from '../validators/SignupFormValidator'
import {Error} from '../components/Error'
import AuthorizeComponent from '../components/AuthorizeComponent'
import useSignUp from '../hooks/mutations/auth/useSignUp'

function Registration() {
  const [formValues, setFormValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  })
  const {signUp} = useSignUp()
  const [isSubmit, setIsSubmit] = useState(true)
  const [formErrors, setFormErrors] = useState({})

  function handleEvent(e) {
    const {value, id} = e.target
    if (e.type === 'change') {
      setFormValues({...formValues, [id]: value.trim()})
    } else if (e.type === 'blur') {
      setFormValues({...formValues, [id]: value})
    }
  }

  useEffect(() => {
    setFormErrors(SignupFormValidator(formValues))
    if (
      formErrors.email === undefined &&
      formErrors.firstName === undefined &&
      formErrors.lastName === undefined &&
      formErrors.password === undefined
    ) {
      setIsSubmit(false)
    } else {
      setIsSubmit(true)
    }
  }, [formValues])

  async function handleSubmit(e) {
    e.preventDefault()
    if (formValues.email && formValues.password) {
      setIsSubmit(true)
      await signUp(formValues)
    }
  }

  return (
    <Wrapper>
      <Header fontSize="3em" color="papayawhip">
        Registration
      </Header>
      <form onSubmit={handleSubmit}>
        <Block>
          <StyledInput
            Margin="5px"
            id="email"
            placeholder="Your email"
            type="text"
            label="Email:"
            onChange={(e) => handleEvent(e)}
            onBlur={(e) => handleEvent(e)}
            required
          ></StyledInput>
          <Error>{formErrors.email}</Error>
        </Block>
        <Block>
          <StyledInput
            Margin="5px"
            id="firstName"
            placeholder="First name"
            type="text"
            label="First name"
            onChange={(e) => handleEvent(e)}
            onBlur={(e) => handleEvent(e)}
            minLength="3"
            required
          ></StyledInput>
          <Error>{formErrors.firstName}</Error>
        </Block>
        <Block>
          <StyledInput
            Margin="5px auto 5px"
            id="lastName"
            placeholder="Last name"
            type="text"
            label="Last name"
            onChange={(e) => handleEvent(e)}
            onBlur={(e) => handleEvent(e)}
            minLength="3"
            required
          ></StyledInput>
          <Error>{formErrors.lastName}</Error>
        </Block>
        <Block>
          <StyledInput
            Margin="5px auto 5px"
            id="password"
            placeholder="Password"
            type="text"
            label="Password"
            onChange={(e) => handleEvent(e)}
            onBlur={(e) => handleEvent(e)}
            required
          ></StyledInput>
          <Error>{formErrors.password}</Error>
        </Block>
        <Block>
          <FileUploader accept="image/*"></FileUploader>
        </Block>
        <Button
          margin="0.3em"
          type="submit"
          disabled={isSubmit}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </form>
    </Wrapper>
  )
}

export default AuthorizeComponent(Registration, true, '/')
