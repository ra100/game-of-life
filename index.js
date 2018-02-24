const life = require('./life')
const { twoDworld } = require('./testData')

const TIMEOUT = 500

const start = () => {
  let world = [...twoDworld]
  setInterval(() => {
    console.clear()
    life.render2DWorld(world)
    world = life.getNewGeneration(world)
  }, TIMEOUT)
}

start()
