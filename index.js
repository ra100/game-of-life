const life = require('./life')

const TIMEOUT = 500

const start = () => {
  let world = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0]
  ]
  setInterval(() => {
    console.clear()
    life.render2DWorld(world)
    world = life.getNewGeneration(world)
  }, TIMEOUT)
}

start()
