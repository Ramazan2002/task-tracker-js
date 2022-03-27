export const validatePassword = (password) => {
  let passwordRegex = /^[a-zA-Z0-9]+[a-zA-Z]+[a-zA-Z0-9]*$/
  if (!passwordRegex.test(password)) {
    return 'Invalid password format'
  }
}
