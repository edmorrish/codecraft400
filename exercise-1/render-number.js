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

const numberSize = 3
const updateInterval = 1000

const numberToOutputNumberList = 
  doInSequence([
    numberToString,
    stringToDigitList,
    digitList => digitList.map(digitToOutputNumber)
  ])

function renderNumber() {
  loopWithInterval(updateInterval)(
    doInSequence([
      getTime,
      mapObjectValues(numberToOutputNumberList),
      ({hours, minutes, seconds}) => ([...hours, colon, ...minutes, colon, ...seconds]),
      (outputNumbers) => outputNumbers.map(expandOutputNumber(numberSize)),
      joinOutputNumbers,
      joinedNumbersToRows(' '),
      withClear(printRows)
    ])
  )()
}

renderNumber()
