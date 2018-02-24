const LIVENESS = [[0, 0, 0, 1], [0, 0, 1, 1]]

const isAlive = (me, neighbors) =>
  ({
    true: (m, n) => LIVENESS[m][n],
    false: () => 0
  }[Number.isInteger(LIVENESS[me][neighbors])](me, neighbors))

const sum = arr => arr.reduce((a, c) => a + c, 0)

const slice = (arr = [], position = 0) =>
  arr.slice(Math.max(position - 1, 0), Math.min(position + 2, arr.length))

const countSublayer = (layer = [], position = []) =>
  sum(
    {
      true: (lay, pos) => slice(lay, pos[0]),
      false: (lay, pos) =>
        slice(lay, pos[0]).map(l => countSublayer(l, pos.slice(1)))
    }[position.length <= 1](layer, position)
  )

const render2DWorld = world =>
  console.log(
    world
      .map(l => l.join(''))
      .join('\n')
      .replace(/0/g, ' ')
      .replace(/1/g, 'X')
  )

const getCells = (world, value, position) =>
  ({
    true: () => isAlive(value, countSublayer(world, position) - value),
    false: () =>
      value.map((v, index) => getCells(world, v, [...position, index]))
  }[Number.isInteger(value)]())

const getNewGeneration = world => getCells(world, world, [])

module.exports = {
  countSublayer,
  getCells,
  getNewGeneration,
  isAlive,
  render2DWorld,
  slice,
  sum
}
