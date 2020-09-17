module.exports = function printOutputNumbers (joinedNumbers) {
  var separator = "\t"
  var linesToPrint = joinedNumbers.map(line => line.join(separator))

  for (line of linesToPrint) {
    console.log(line)
  }
}
