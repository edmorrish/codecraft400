function matchMapping(mapping, digit) {
  for (possibleMatch of mapping) {
    if (possibleMatch.matches.indexOf(digit) > -1) {
      return possibleMatch.display
    }
  }
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

const mappings = [ firstRow, secondRow, thirdRow ]

module.exports = (digit) => {
  return mappings.map(mapping => matchMapping(mapping, digit))
}
