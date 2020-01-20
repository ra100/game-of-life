const worlds = require('./testData')
// const life = require('./lifeOptim')
const life = require('./lifeIf')
// const life = require('./life')

const LOOPS = 1000

const memory = []

const storeMemory = () => memory.push(process.memoryUsage())

const sw = (s, w = 9) =>
  `            ${s}`
    .split('')
    .splice(-w, w + 1)
    .join('')

const printMemory = () => {
  console.log(`| ${sw('rss')} | ${sw('heapTotal')} | ${sw('heapUsed')} |`)
  memory.forEach((m) => console.log(`| ${sw(m.rss)} | ${sw(m.heapTotal)} | ${sw(m.heapUsed)} |`))
}

storeMemory()

let world

Object.entries(worlds).forEach(([dimension, data]) => {
  console.time(`${dimension}D`)
  world = [...data]
  for (let i = 0; i < LOOPS; i++) {
    world = life.getNewGeneration(world)
  }
  console.timeEnd(`${dimension}D`)
  storeMemory()
})

printMemory()
