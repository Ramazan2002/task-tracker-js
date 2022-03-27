import {validateEmail} from './EmailValidator'
import {validatePassword} from './PasswordValidator'

export const LoginFormValidator = (values) => {
  const errors = {}
  errors.login = validateEmail(values.login)
  errors.password = validatePassword(values.password)
  return errors
}
