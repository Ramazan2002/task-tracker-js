function validateEmail(email) {
  let emailRegex = /[a-zA-Z0-9]+@[a-zA-Z]+(\.[a-zA-Z]+)+/;
  return emailRegex.test(email)
}

export default validateEmail;