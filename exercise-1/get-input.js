module.exports = function getInput () {
  const args = process.argv.slice(1)
  const parsedSize = parseInt(args[1], 10)
  return { numberSize: parsedSize }
}
