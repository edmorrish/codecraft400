const joinedNumbersToRows = (separator) => (joinedNumbers) =>  joinedNumbers.map(line => line.join(separator))

module.exports = joinedNumbersToRows
