function charArrayLooper(charArray) {
  const array = [...charArray]
  return {
    next: () => {
      const nextItem = array.shift()
      array.push(nextItem)
      return nextItem
    }
  }
}

function rowsToTapeRows(totalWidth, separator, offset, rows) {
  var loopedOutputs = rows.map(
    row => charArrayLooper(row + separator)
  )

  for (var i = 0; i < offset; i++) {
    loopedOutputs.forEach(looper => looper.next())
  }

  var outputRows = loopedOutputs.map(
    row => '' 
  )

  for (var j = 0; j < totalWidth; j++) {
    loopedOutputs.forEach((looper, index) => outputRows[index] += looper.next())
  }

  return outputRows
}

module.exports = rowsToTapeRows
