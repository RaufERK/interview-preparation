const nums: number[] = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4]

function rd(array: number[] | string[]): number {
  const past: number[] = []
  for (let index = 0; index < array.length; index++) {
    const element = +array[index]
    if (past.some((pEl) => pEl === element)) {
      array.splice(index, 1)
      index--
    } else {
      past.push(element)
    }
  }
  return array.length
}

console.log(rd(nums))
console.log(nums)
