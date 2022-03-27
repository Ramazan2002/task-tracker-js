import {validateEmail} from './EmailValidator'
import {validateText} from './TextValidator'
import {validatePassword} from './PasswordValidator'

export const SignupFormValidator = (values) => {
  const errors = {}
  errors.mail = validateEmail(values.mail)
  errors.firstName = validateText(values.firstName)
  errors.lastName = validateText(values.lastName)
  errors.password = validatePassword(values.password)
  return errors
}
