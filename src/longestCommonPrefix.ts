function longestCommonPrefix(param: string[] = []): string {
  let resultPrefix = ''
  const firstEl = param[0]
  for (let index = 0; index <= firstEl.length; index++) {
    const slice = firstEl.slice(0, index)
    const res = param.every((el) => el.search(slice) === 0)
    if (res) {
      resultPrefix = slice
    }
  }
  return resultPrefix
}

console.log('____START____')

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['c', 'acc', 'ccc']))
console.log(longestCommonPrefix(['reflower', 'flow', 'flight']))
console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
