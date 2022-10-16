console.log('==START==>')

const str = 'PAYPALISHIRING'
const str2 = 'PAYPALISHIRING'

function convert(s: string, numRows: number = 3): string {
  // console.clear()
  // console.log('START WORD===>', s)

  const { length } = s
  const main: string[][] = Array()
  for (let index = 0; index < numRows; index++) {
    main.push(Array(s.length).fill(null))
  }

  let sIndex = 0
  let arrRow = 0
  let arrCol = 0
  let direction = 1

  console.table(main)

  while (sIndex <= length - 1) {
    console.log({ arrRow, arrCol, direction }, s[sIndex])

    main[arrRow][arrCol] = s[sIndex++]

    arrRow = arrRow + direction

    if (direction < 0) {
      arrCol += 1
    }

    if (arrRow > numRows - 1) {
      direction = -1
      arrRow = numRows - 2
      arrCol += 1
    }

    if (arrRow <= 0) {
      arrRow = 0
      direction = 1
    }
  }
  console.table(main)

  return main.reduce((acc, item) => acc + item.join(''), '')
}

// console.log('RES:', convert('A', 1))
// console.log('RES:', convert('AB', 1))
console.log('RES:', convert('AB', 1))
console.log('RES:', convert('ABCDEF', 1))
console.log('RES:', convert(str, 3))
