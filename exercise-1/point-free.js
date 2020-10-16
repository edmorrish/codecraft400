module.exports = {
  flatten: arr => arr.flat(),
  join: str => arr => arr.join(str),
  map: (func) => (arr) => arr.map(func)
}
