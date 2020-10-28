module.exports = function transpose (array) {
  var output = []
  for (item of array) {
    item.forEach((row, index) => {
      if (!output[index]) {
        output[index] = []
      }
      output[index].push(row)
    })
  }
  return output
}

