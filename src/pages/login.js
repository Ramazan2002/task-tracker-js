import React, {useState, useEffect} from 'react'
import StyledInput from '../components/InputField'
import Wrapper from '../components/Wrapper'
import Button from '../components/Buttons'
import Block from '../components/Block'
import Header from '../components/Header'
import Icon from '../components/EyeIcon'
import {Error} from '../components/Error'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {LoginFormValidator} from '../validators/FormValidator'
import AuthorizeComponent from '../components/AuthorizeComponent'
import useSignIn from '../hooks/mutations/auth/useSignIn'

function Login() {
  const eye = <FontAwesomeIcon icon={faEye} />
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })
  const {signIn} = useSignIn()

  const [passwordShown, setPasswordShown] = useState(false)
  const [isSubmit, setIsSubmit] = useState(true)
  const [formErrors, setFormErrors] = useState({})

  async function handleLogin(e) {
    e.preventDefault()
    if (!isSubmit) {
      setIsSubmit(true)
      await signIn(formValues)
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
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (AuthUser.user) {
  //     navigate('/', {replace: true})
  //   }
  // }, [AuthUser.user])

  useEffect(() => {
    setFormErrors(LoginFormValidator(formValues))
    if (formErrors.email === undefined && formErrors.password === undefined) {
      setIsSubmit(false)
    } else {
      setIsSubmit(true)
    }
  }, [formValues])

  return (
    <Wrapper>
      <Header fontSize="4em" color="papayawhip">
        Login
      </Header>
      <form onSubmit={handleLogin}>
        <Block>
          <StyledInput
            id="email"
            Margin="10px"
            placeholder="Your login"
            type="text"
            label="Login:"
            onChange={(e) => handleEvent(e)}
            onBlur={(e) => handleEvent(e)}
            required
          />
          <Error>{formErrors.email}</Error>
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
        <Button
          margin="0.3em"
          disabled={isSubmit}
          onClick={handleLogin}
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </Wrapper>
  )
}

export default AuthorizeComponent(Login, true, '/')
