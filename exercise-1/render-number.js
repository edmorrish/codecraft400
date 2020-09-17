var getInput = require('./get-input')
var stringToDigitList = require('./string-to-digit-list')
var digitToRows = require('./digit-to-rows')
var joinOutputNumbers = require('./join-output-numbers')
var printOutputNumbers = require('./print-output-numbers')
var { doInSequence } = require('./helpers')

function renderNumber() {
  doInSequence([
    getInput,
    stringToDigitList,
    digitList => digitList.map(digitToRows),
    joinOutputNumbers,
    printOutputNumbers
  ])
}

renderNumber()
