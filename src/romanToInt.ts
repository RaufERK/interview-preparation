const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  M: 1000,
}

function romanToInt(s: string): number {
  return s.split('').reduce((acc, el, index, array) => {
    const slice = array.slice(index + 1)
    const koef = slice.some((arrEl) => roman[arrEl] > roman[el]) ? -1 : 1
    return acc + koef * roman[el]
  }, 0)
}

console.log(romanToInt('CM'))
console.log(romanToInt('MC'))
console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
