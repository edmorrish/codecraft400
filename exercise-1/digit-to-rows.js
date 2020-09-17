function matchMapping(mapping, digit) {
  for (possibleMatch of mapping) {
    if (possibleMatch.matches.indexOf(digit) > -1) {
      return possibleMatch.display
    }
  }
}

function firstRow(digit) {
  if (digit === 1 || digit === 4) {
    return "   "
  } else {
    return " _ "
  }
}

function secondRow(digit) {
  var mapping = [
    { display: "| |", matches: [0] },
    { display: "  |", matches: [1, 7] },
    { display: "|_ ", matches: [5, 6] },
    { display: " _|", matches: [2, 3] },
    { display: "|_|", matches: [4, 8, 9] }
  ]

  return matchMapping(mapping, digit)
}

function thirdRow(digit) {
  var mapping = [
    { display: "|_|", matches: [0, 6, 8] },
    { display: "|_ ", matches: [2] },
    { display: " _|", matches: [3, 5, 9] },
    { display: "  |", matches: [1, 4, 7] }
  ]

  return matchMapping(mapping, digit)
}

module.exports = function digitToRows(digit) {
  return [
    firstRow(digit),
    secondRow(digit),
    thirdRow(digit)
  ]
}
