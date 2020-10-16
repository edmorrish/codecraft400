var stringToDigitList = require('./string-to-digit-list')
var digitToRows = require('./digit-to-rows')
var joinOutputNumbers = require('./join-output-numbers')
var joinedNumbersToRows = require('./joined-numbers-to-rows')
var printRows = require('./print-rows')
var { doInSequence, loopWithInterval, mapObjectValues, debugPrint, withClear, map } = require('./helpers')
var getTime = require('./get-time')
var numberToString = require('./number-to-string')
var expandOutputNumber = require('./expand-output-number')
var getInput = require('./get-input')
var rowsToTapeRows = require('./rows-to-tape-rows')

const updateInterval = 100
const displayWidth = 120
const clockSeparator = '        '

function renderNumber() {
  const { numberSize } = getInput()

  loopWithInterval(updateInterval)((_input, loopIndex) => {
    doInSequence([
      getTime,
      mapObjectValues(numberToString),
      mapObjectValues(stringToDigitList),
      ({hours, minutes, seconds}) => ([...hours, ':', ...minutes, ':', ...seconds]),
      map(digitToRows(numberSize)),
      joinOutputNumbers,
      joinedNumbersToRows(' '),
      (rows) => rowsToTapeRows(displayWidth, clockSeparator, loopIndex, rows),
      withClear(printRows)
    ])()
  }
  )()
}

renderNumber()
