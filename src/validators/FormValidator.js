import {validateEmail} from './EmailValidator'
import {validatePassword} from './PasswordValidator'

export const LoginFormValidator = (values) => {
  const errors = {}
  errors.email = validateEmail(values.email)
  errors.password = validatePassword(values.password)
  return errors
}
