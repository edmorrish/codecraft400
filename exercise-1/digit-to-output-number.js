function matchMapping(mapping, digit) {
  for (possibleMatch of mapping) {
    if (possibleMatch.matches.indexOf(digit) > -1) {
      return possibleMatch.display
    }
  }
}

function expandDisplay(display, size) {
  const [start, middle, end] = display.split('')
  return `${start}${middle.repeat(size)}${end}`
}

function getRow(mapping, size, digit) {
  return expandDisplay(matchMapping(mapping, digit), size)
}

const firstRow = [
  { display: "   ", matches: [1, 4] },
  { display: " _ ", matches: [0, 2, 3, 5, 6, 7, 8, 9]}
]

const secondRow = [
  { display: "| |", matches: [0] },
  { display: "  |", matches: [1, 7] },
  { display: "|_ ", matches: [5, 6] },
  { display: " _|", matches: [2, 3] },
  { display: "|_|", matches: [4, 8, 9] }
]

const thirdRow = [
  { display: "|_|", matches: [0, 6, 8] },
  { display: "|_ ", matches: [2] },
  { display: " _|", matches: [3, 5, 9] },
  { display: "  |", matches: [1, 4, 7] }
]

const stretchRow = (row, size) => [...Array(size - 1).keys()].map(() => row.replace(/_/g, ' '))

module.exports = (size) => (digit) => {
  return [
    getRow(firstRow, size, digit),
    ...stretchRow(getRow(secondRow, size, digit), size),
    getRow(secondRow, size, digit),
    ...stretchRow(getRow(thirdRow, size, digit), size),
    getRow(thirdRow, size, digit)
  ]
}
