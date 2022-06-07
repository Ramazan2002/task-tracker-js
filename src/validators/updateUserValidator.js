import {validateEmail} from './EmailValidator'
import {validateText} from './TextValidator'

export default function updateUserValidator(formState, errorState) {
  const errors = {}
  errors.email = validateEmail(formState.email)
  errors.firstName = validateText(formState.firstName)
  errors.lastName = validateText(formState.lastName)

  return {...errorState, ...errors}
}
