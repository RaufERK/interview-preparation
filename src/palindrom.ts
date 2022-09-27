function isPalindrome(x: number): boolean {
  const stringParam = String(x)
  let start = 0
  let end = stringParam.length - 1
  while (start < end) {
    if (stringParam[start] !== stringParam[end]) return false
    start++
    end--
  }
  return true
}

console.log(isPalindrome(-121))
console.log(isPalindrome(1221))
console.log(isPalindrome(12521))
console.log(isPalindrome(42521))
