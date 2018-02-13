const life = require('./life')

describe('Life', () => {
  describe('isAlive()', () => {
    test('should return correct alive values', () => {
      expect(life.isAlive(0, 0)).toBe(0)
      expect(life.isAlive(0, 3)).toBe(1)
      expect(life.isAlive(0, 4)).toBe(0)
      expect(life.isAlive(1, 0)).toBe(0)
      expect(life.isAlive(1, 2)).toBe(1)
      expect(life.isAlive(1, 3)).toBe(1)
      expect(life.isAlive(1, 4)).toBe(0)
      expect(life.isAlive(1, 8)).toBe(0)
    })
  })

  describe('countSublayer()', () => {
    const world = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 0, 0, 1], [0, 0, 0, 1]]
    test('should count values in 1D array', () => {
      expect(life.countSublayer([0, 1, 1, 0], [1])).toBe(2)
      expect(life.countSublayer([0, 1, 1, 0], [3])).toBe(1)
    })
    test('should return number of neighbors', () => {
      const position = [1, 1]
      expect(life.countSublayer(world, position)).toEqual(2)
    })
    test('should not fail for edge cases', () => {
      const position = [0, 0]
      expect(life.countSublayer(world, position)).toEqual(1)
    })
    test('should return 9 for full grid', () => {
      const position = [1, 1]
      const w = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
      expect(life.countSublayer(w, position)).toEqual(9)
    })
    test('should return 8 for full grid', () => {
      const position = [1, 1]
      const w = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
      expect(life.countSublayer(w, position)).toEqual(8)
    })
    test('should return 1 for single neighbor', () => {
      const position = [1, 1]
      const w = [[0, 0, 0], [0, 0, 0], [0, 0, 1]]
      expect(life.countSublayer(w, position)).toEqual(1)
    })
  })

  describe('getGeneration()', () => {
    test('should create dead generation', () => {
      const world = [[0, 1, 0, 0], [0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 1, 0]]
      expect(life.getNewGeneration(world)).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ])
    })
    test('should create new life', () => {
      const expected = expect(
        life.getNewGeneration([
          [0, 0, 0, 0],
          [0, 1, 0, 0],
          [1, 0, 1, 0],
          [0, 0, 0, 0]
        ])
      ).toEqual([[0, 0, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]])
    })
    test('should stay as block', () => {
      const expected = expect(
        life.getNewGeneration([
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0]
        ])
      ).toEqual([[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]])
    })
  })
})
