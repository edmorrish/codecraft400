function horizontalStretch(display, size) {
  const [start, ...rest] = display.split('')
  const end = rest.slice(-1)
  const middle = rest.slice(0, -1).join('')
  return `${start}${middle.repeat(size)}${end}`
}

const replaceExcept = (exceptions) => (string) => 
  string.split('').map(char => exceptions.includes(char) ? char : ' ').join('')

const verticalStretch = (row, size, exceptions) => [...Array(size - 1).keys()].map(() => replaceExcept(exceptions)(row))

module.exports = ({ size, verticallyStretchable }, outputNumber) => {
  return outputNumber
    .map(row => horizontalStretch(row, size))
    .reduce((output, row) => (
      output.length === 0 ?
        [ row ] :
        [
          ...output, 
          ...verticalStretch(row, size, verticallyStretchable),
          row
        ]
    ), [])
}
