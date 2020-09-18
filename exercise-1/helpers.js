const doInSequence = functions => initialInput => {
  return functions.reduce(
    (previousOutput, func) => func(previousOutput)
  , initialInput)
}

function loopWithInterval(interval) {
  return func => loopInput => {
    let iterationIndex = 0
    setInterval(() => {
      func(loopInput, iterationIndex)
      iterationIndex += 1
    }, interval)
  }
}

function debugPrint(message) {
  return (input) => {
    if (process.env.DEBUG) {
      console.log(message, input)
    }
    return input
  }
}

const withClear = func => arg => { console.clear(); func(arg) }

const mapObjectValues = (func) => (obj) =>
  Object.entries(obj).reduce((acc, [key, val]) => ({...acc, [key]: func(val)}), {})

module.exports = {
  doInSequence,
  loopWithInterval,
  debugPrint,
  mapObjectValues,
  withClear
}
