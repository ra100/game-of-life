# Game of Life

> This is test of implementing game of life with some restrictions
> For more info check [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life)

## Run

```bash
node .
```

or

```bash
npm start
```

## Run test

```
npm install
npm test
```

## Challenges

* [x] go functional, every function returns
* [x] no loops
* [x] no conditionals
* [x] small functions (4 <= lines>)

## Performance

There are 3 life implementations:

* `lifeIf.js` - uses conditionals (ternary)
* `life.js` - has conditionals swapped for lookup in hashmap/object
* `lifeOptim.js` - same as above, but "switch" objects are not created on function execution

Comparing these 3 ways to do it id done in `perfTest.js` on the same data and time to execute
is measured by `console.time()`

`lifeOptim.js`

0D: 2.807ms
1D: 11.542ms
2D: 75.150ms
3D: 1062.137ms
4D: 17868.797ms
5D: 274961.129ms

|       rss | heapTotal |  heapUsed |
|-----------|-----------|-----------|
|  29929472 |   7159808 |   4539616 |
|  30584832 |  10305536 |   4810376 |
|  33284096 |  10305536 |   5899664 |
|  33824768 |  10829824 |   5441720 |
|  38150144 |  15024128 |   7194728 |
|  79527936 | 354762752 |  19738496 |
|  89989120 |  61685760 |  32561528 |

`lifeIf.js`

0D: 2.693ms
1D: 12.058ms
2D: 79.863ms
3D: 1041.338ms
4D: 16999.111ms
5D: 261422.055ms

|       rss | heapTotal |  heapUsed |
|-----------|-----------|-----------|
|  29925376 |   7159808 |   4535520 |
|  30580736 |  10305536 |   4931384 |
|  34566144 |  10305536 |   4743920 |
|  34836480 |  10829824 |   5872528 |
|  39428096 |  15024128 |   5521904 |
|  86466560 | 471678976 |  25589824 |
|  90112000 | 560283648 |  12083656 |

`life.js`

0D: 3.228ms
1D: 11.325ms
2D: 80.612ms
3D: 1146.898ms
4D: 19576.771ms
5D: 317014.593ms

|       rss | heapTotal |  heapUsed |
|-----------|-----------|-----------|
|  29970432 |   7159808 |   4536064 |
|  31166464 |  10305536 |   5603344 |
|  34443264 |  10305536 |   6175784 |
|  34443264 |  10829824 |   5398664 |
|  38768640 |  15024128 |   7626416 |
|  72708096 | 188563456 |   9147912 |
|  81645568 |  56442880 |  27648328 |
