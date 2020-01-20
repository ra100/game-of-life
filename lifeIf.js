const isAlive = (me, neighbours) => (me ? (neighbours >= 2 ? 1 : 0) : neighbours === 3 ? 1 : 0)

const sum = (arr) => arr.reduce((a, c) => a + c, 0)

const slice = (arr = [], position = 0) => arr.slice(Math.max(position - 1, 0), Math.min(position + 2, arr.length))

const countSublayer = (layer = [], position = []) =>
  sum(
    (position.length <= 1 && slice(layer, position[0])) ||
      slice(layer, position[0]).map((l) => countSublayer(l, position.slice(1))),
  )

const render2DWorld = (world) =>
  console.log(
    world
      .map((l) => l.join(''))
      .join('\n')
      .replace(/0/g, ' ')
      .replace(/1/g, 'X'),
  )

const getCells = (world, value, position) =>
  Number.isInteger(value)
    ? isAlive(value, countSublayer(world, position) - value)
    : value.map((v, index) => getCells(world, v, [...position, index]))

const getNewGeneration = (world) => getCells(world, world, [])

module.exports = {
  countSublayer,
  getCells,
  getNewGeneration,
  isAlive,
  render2DWorld,
  slice,
  sum,
}
