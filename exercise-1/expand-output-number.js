function expandDisplay(display, size) {
  const [start, ...rest] = display.split('')
  const end = rest.slice(-1)
  const middle = rest.slice(0, -1).join('')
  return `${start}${middle.repeat(size)}${end}`
}

const stretchRow = (row, size) => [...Array(size - 1).keys()].map(() => row.replace(/_/g, ' ').replace(/▗/g, ' '))

module.exports = (size) => (outputNumber) => {
  return outputNumber
    .map(row => expandDisplay(row, size))
    .reduce((output, row) => (
      output.length === 0 ?
        [ row ] :
        [
          ...output, 
          ...stretchRow(row, size),
          row
        ]
    ), [])
}
