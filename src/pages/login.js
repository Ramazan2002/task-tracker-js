import React, {useState, useEffect} from 'react'
import StyledInput from '../components/inputField'
import Wrapper from '../components/wrapper'
import Button from '../components/buttons'
import Block from '../components/block'
import Header from '../components/header'
import Icon from '../components/eyeIcon'
import {Error} from '../components/error'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {LoginFormValidator} from '../validators/FormValidator'
import {useApolloClient} from '@apollo/client'
import useAuthUser from '../globals/AuthUser'
import {useNavigate} from 'react-router-dom'
import signIn from '../api/mutations/signIn'

function Login() {
  const eye = <FontAwesomeIcon icon={faEye} />
  const [formValues, setFormValues] = useState({
    login: '',
    password: ''
  })

  const [passwordShown, setPasswordShown] = useState(false)
  const [isSubmit, setIsSubmit] = useState(true)
  const [formErrors, setFormErrors] = useState({})
  const {dispatch, state: AuthUser} = useAuthUser()
  const client = useApolloClient()

  const handleSignIn = async (event) => {
    console.log(AuthUser.isLoading)
    console.log(isSubmit)
    event.preventDefault()
    if (!isSubmit) {
      dispatch({type: 'loading'})
      const result = await signIn(client, formValues)
      if (result === false) setIsSubmit(true)
      dispatch({type: 'loaded', payload: result})
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  function handleEvent(e) {
    const {value, id} = e.target
    if (e.type === 'change') {
      setFormValues({...formValues, [id]: value.trim()})
    } else if (e.type === 'blur') {
      setFormValues({...formValues, [id]: value})
    }
  }
  const navigate = useNavigate()
  useEffect(() => {
    if (AuthUser.user) {
      navigate('/', {replace: true})
    }
  }, [AuthUser.user])

  useEffect(() => {
    setFormErrors(LoginFormValidator(formValues))
    if (formErrors.login === undefined && formErrors.password === undefined) {
      setIsSubmit(false)
    } else {
      setIsSubmit(true)
    }
  }, [formValues])

  return (
    <Wrapper>
      <Header fontSize="4em">Task-tracker</Header>
      <Header fontSize="3em">Login Page</Header>
      <form onSubmit={handleSignIn}>
        <Block>
          <StyledInput
            id="login"
            Margin="10px"
            placeholder="Your login"
            type="text"
            label="Login:"
            onChange={(e) => handleEvent(e)}
            onBlur={(e) => handleEvent(e)}
            required
          />
          <Error>{formErrors.login}</Error>
        </Block>
        <Block>
          <StyledInput
            Margin="10px 0px 10px 15px"
            id="password"
            placeholder="Your password"
            type={passwordShown ? 'text' : 'password'}
            label="Password:"
            onChange={(e) => handleEvent(e)}
            onBlur={(e) => handleEvent(e)}
          />
          <Icon onClick={togglePasswordVisibility}>{eye}</Icon>
          <Error>{formErrors.password}</Error>
        </Block>
        <Button margin="0.3em" disabled={isSubmit} type="submit">
          Sign In
        </Button>
      </form>
    </Wrapper>
  )
}

export default Login
