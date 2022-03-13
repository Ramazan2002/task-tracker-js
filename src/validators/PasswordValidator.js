function validatePassword(password) {
  let passwordRegex = /[a-zA-Z0-9]+[a-zA-Z]/;
  return passwordRegex.test(password)
}

export default validatePassword;