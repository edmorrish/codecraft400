var stringToDigitList = require('./string-to-digit-list')
var digitToOutputNumber = require('./digit-to-output-number')
var joinOutputNumbers = require('./join-output-numbers')
var joinedNumbersToRows = require('./joined-numbers-to-rows')
var printRows = require('./print-rows')
var { doInSequence, loopWithInterval, mapObjectValues, debugPrint, withClear } = require('./helpers')
var getTime = require('./get-time')
var colon = require('./colon')
var numberToString = require('./number-to-string')
var expandOutputNumber = require('./expand-output-number')
var getInput = require('./get-input')
var rowsToTapeRows = require('./rows-to-tape-rows')

const updateInterval = 100
const displayWidth = 120
const clockSeparator = '        '

const numberToOutputNumberList = 
  doInSequence([
    numberToString,
    stringToDigitList,
    digitList => digitList.map(digitToOutputNumber)
  ])

function renderNumber() {
  const { numberSize } = getInput()

  loopWithInterval(updateInterval)((_input, loopIndex) => {
    doInSequence([
      getTime,
      mapObjectValues(numberToOutputNumberList),
      ({hours, minutes, seconds}) => ([...hours, colon, ...minutes, colon, ...seconds]),
      (outputNumbers) => outputNumbers.map(expandOutputNumber(numberSize)),
      joinOutputNumbers,
      joinedNumbersToRows(' '),
      (rows) => rowsToTapeRows(displayWidth, clockSeparator, loopIndex, rows),
      withClear(printRows)
    ])()
  }
  )()
}

renderNumber()
