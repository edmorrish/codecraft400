function doInSequence(functions, initialInput) {
  return functions.reduce(
    (previousOutput, func) => func(previousOutput)
  , initialInput)
}

function debugPrint(message) {
  return (input) => {
    if (process.env.DEBUG) {
      console.log(message, input)
    }
    return input
  }
}

module.exports = {
  doInSequence,
  debugPrint
}
