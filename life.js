const LIVENESS = [[0, 0, 0, 0, 1], [0, 0, 1, 1, 0]]

const isAlive = (me, neighbors) =>
  Number.isInteger(LIVENESS[me][neighbors]) ? LIVENESS[me][neighbors] :
  Math.abs(me - 1)

module.exports = {
  isAlive
}
