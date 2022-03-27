import React, {useEffect, useState} from 'react'
import StyledInput from '../components/inputField'
import FileUploader from '../components/uploadFile'
import Wrapper from '../components/wrapper'
import Button from '../components/buttons'
import Block from '../components/block'
import Header from '../components/header'
import {SignupFormValidator} from '../validators/SignupFormValidator'
import {Error} from '../components/error'
import {useNavigate} from 'react-router-dom'
import useAuthUser from '../globals/AuthUser'

function Registration() {
  const [formValues, setFormValues] = useState({
    mail: '',
    firstName: '',
    lastName: '',
    password: ''
  })

  const [isSubmit, setIsSubmit] = useState(true)
  const [formErrors, setFormErrors] = useState({})
  const {state: AuthUser} = useAuthUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (AuthUser.user) {
      navigate('/', {replace: true})
    }
  }, [AuthUser.user])

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
      formErrors.mail === undefined &&
      formErrors.firstName === undefined &&
      formErrors.lastName === undefined &&
      formErrors.password === undefined
    ) {
      setIsSubmit(false)
    } else {
      setIsSubmit(true)
    }
  }, [formValues])

  return (
    <Wrapper>
      <Header fontSize="4em">Task-tracker</Header>
      <Header fontSize="3em">Registration Page</Header>
      <form>
        <Block>
          <StyledInput
            Margin="5px"
            id="mail"
            placeholder="Your email"
            type="text"
            label="Email:"
            onChange={(e) => handleEvent(e)}
            onBlur={(e) => handleEvent(e)}
            required
          ></StyledInput>
          <Error>{formErrors.mail}</Error>
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
        <Button margin="0.3em" type="submit" disabled={isSubmit}>
          Sign Up
        </Button>
      </form>
    </Wrapper>
  )
}

export default Registration
