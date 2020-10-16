module.exports = item => arr => [].concat(...arr.map(e => [item, e])).slice(1)
