const life = require('./life')

describe('Life', () => {
  describe('isAlive()', () => {
    test('should return correct alive values', () => {
      expect(life.isAlive(0, 0)).toBe(0)
      expect(life.isAlive(0, 4)).toBe(1)
      expect(life.isAlive(0, 5)).toBe(1)
      expect(life.isAlive(1, 0)).toBe(0)
      expect(life.isAlive(1, 2)).toBe(1)
      expect(life.isAlive(1, 3)).toBe(1)
      expect(life.isAlive(1, 4)).toBe(0)
      expect(life.isAlive(1, 8)).toBe(0)
    })
  })
})
