const LIVENESS = [
  [0, 0, 0, 1],
  [0, 0, 1, 1],
]

const aliveSwitch = {
  true: (me, neighbours) => LIVENESS[me][neighbours],
  false: () => 0,
}

const isAlive = (me, neighbours) => aliveSwitch[Number.isInteger(LIVENESS[me][neighbours])](me, neighbours)

const sum = (arr) => arr.reduce((a, c) => a + c, 0)

const slice = (arr = [], position = 0) => arr.slice(Math.max(position - 1, 0), Math.min(position + 2, arr.length))

const sublayerSwitch = {
  true: (layer, position) => slice(layer, position[0]),
  false: (layer, position) => slice(layer, position[0]).map((l) => countSublayer(l, position.slice(1))),
}

const countSublayer = (layer = [], position = []) => sum(sublayerSwitch[position.length <= 1](layer, position))

const render2DWorld = (world) =>
  console.log(
    world
      .map((l) => l.join(''))
      .join('\n')
      .replace(/0/g, ' ')
      .replace(/1/g, 'X'),
  )

const cellsSwitch = {
  true: (world, value, position) => isAlive(value, countSublayer(world, position) - value),
  false: (world, value, position) => value.map((v, index) => getCells(world, v, [...position, index])),
}

const getCells = (world, value, position) => cellsSwitch[Number.isInteger(value)](world, value, position)

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
