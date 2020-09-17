module.exports = function stringToDigitList (string) {
  var digitsAsChars = [0,1,2,3,4,5,6,7,8,9].map(digit => digit + '')
  return string
    .split('')
    .filter((char) => digitsAsChars.indexOf(char) > -1)
    .map(n => parseInt(n, 10))
}
