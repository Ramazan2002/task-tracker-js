export const validateEmail = (email) => {
  let emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/
  if (!emailRegex.test(email)) {
    return 'Invalid login'
  }
}
