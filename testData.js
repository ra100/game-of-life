const oneDworld = [0, 1, 1, 1, 0, 0]

const twoDworld = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0],
]

const threeDworld = [[...twoDworld], [...twoDworld], [...twoDworld], [...twoDworld], [...twoDworld], [...twoDworld]]

const fourDworld = [
  [...threeDworld],
  [...threeDworld],
  [...threeDworld],
  [...threeDworld],
  [...threeDworld],
  [...threeDworld],
]

const fiveDworld = [
  [...fourDworld],
  [...fourDworld],
  [...fourDworld],
  [...fourDworld],
  [...fourDworld],
  [...fourDworld],
]

module.exports = {
  0: [1],
  1: oneDworld,
  2: twoDworld,
  3: threeDworld,
  4: fourDworld,
  5: fiveDworld,
}
