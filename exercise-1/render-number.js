var getInput = require('./get-input')
var stringToDigitList = require('./string-to-digit-list')
var digitToOutputNumber = require('./digit-to-output-number')
var joinOutputNumbers = require('./join-output-numbers')
var joinedNumbersToRows = require('./joined-numbers-to-rows')
var printRows = require('./print-rows')
var { doInSequence, loopWithInterval, debugPrint } = require('./helpers')
var rowsToTapeRows = require('./rows-to-tape-rows')

function printTapeAtOffset (rows, offset) {
  const tapedRows = rowsToTapeRows(120, '   ', offset, rows)
  console.clear()
  printRows(tapedRows)
}

function renderNumber() {
  const [digitString, sizeString] = getInput()
  const size = parseInt(sizeString, 10)

  doInSequence([
    () => digitString,
    stringToDigitList,
    digitList => digitList.map(digitToOutputNumber(sizeString)),
    joinOutputNumbers,
    joinedNumbersToRows(' '),
    loopWithInterval(100)(printTapeAtOffset)
  ])
}

renderNumber()
