const LIVENESS = [
  [0, 0, 0, 1],
  [0, 0, 1, 1],
]

const isAlive = (me, neighbours) =>
  ({
    true: LIVENESS[me][neighbours],
    false: 0,
  }[Number.isInteger(LIVENESS[me][neighbours])])

const sum = (arr) => arr.reduce((a, c) => a + c, 0)

const slice = (arr = [], position = 0) => arr.slice(Math.max(position - 1, 0), Math.min(position + 2, arr.length))

const countSublayer = (layer = [], position = []) =>
  sum(
    {
      true: () => slice(layer, position[0]),
      false: () => slice(layer, position[0]).map((l) => countSublayer(l, position.slice(1))),
    }[position.length <= 1](),
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
  ({
    true: () => isAlive(value, countSublayer(world, position) - value),
    false: () => value.map((v, index) => getCells(world, v, [...position, index])),
  }[Number.isInteger(value)]())

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
