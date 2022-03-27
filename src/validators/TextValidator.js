export const validateText = (text) => {
  if (text.length < 3) return 'Field size must be more than 2'
  if (text.length > 10) return 'Field size must be less than 10'
}
