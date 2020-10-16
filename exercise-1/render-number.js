var stringToDigitList = require('./string-to-digit-list')
var digitToRows = require('./digit-to-rows')
var transpose = require('./transpose')
var printRows = require('./print-rows')
var { doInSequence, loopWithInterval, debugPrint, withClear } = require('./helpers')
var getTime = require('./get-time')
var numberToString = require('./number-to-string')
var expandOutputNumber = require('./expand-output-number')
var getInput = require('./get-input')
var rowsToTapeRows = require('./rows-to-tape-rows')
var intersperse = require('./intersperse')
var { flatten, join, map } = require('./point-free')

const updateInterval = 100
const displayWidth = 120
const clockSeparator = '        '

function renderNumber() {
  const { numberSize } = getInput()

  loopWithInterval(updateInterval)((_input, loopIndex) => {
    doInSequence([
      getTime,
      ({hours, minutes, seconds}) => ([ hours, minutes, seconds ]),
      map(numberToString),
      map(stringToDigitList),
      intersperse(':'),
      flatten,
      map(digitToRows(numberSize)),
      transpose,
      map(join(' ')),
      (rows) => rowsToTapeRows(displayWidth, clockSeparator, loopIndex, rows),
      withClear(printRows)
    ])()
  }
  )()
}

renderNumber()
