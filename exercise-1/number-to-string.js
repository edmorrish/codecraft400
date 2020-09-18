module.exports = (number) => {
  var string = number + ''
  if (string.length < 2) {
    string = '0' + string
  }
  return string
}
