module.exports = function transpose (numbers) {
  var output = []
  for (number of numbers) {
    number.forEach((row, index) => {
      if (!output[index]) {
        output[index] = []
      }
      output[index].push(row)
    })
  }
  return output
}

