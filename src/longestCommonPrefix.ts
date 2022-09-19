function longestCommonPrefix(param: string[] = []): string[] {
  if (param.length === 0) return []
  let result = ''

  const resultfirstWordArr = param[0].split('')

  // for (let index = 0; index < firstWordArr.length; index++) {
  //   const element = firstWordArr[index]
  //   console.log(element)
  //   for (let index = 1; index < firstWordArr.length; index++) {
  //     const element = firstWordArr[index]
  //   }
  // }

  // resultfirstWordArr.forEach()

  return param
}

const stingArr: string[] = ['flower', 'flow', 'flight']
console.log(stingArr)
const result = longestCommonPrefix(stingArr)
console.log(result)
