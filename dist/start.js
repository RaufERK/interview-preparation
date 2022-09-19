console.clear()
const verify = (param) => {
  const brackets = {
    ['[']: ']',
    ['<']: '>',
    ['(']: ')',
  }
  const bracketsPair = new Set(Object.values(brackets))
  const collect = []
  for (let index = 0; index < param.length; index++) {
    const symbol = param[index]
    const last = collect[collect.length - 1]
    if (brackets[symbol]) {
      collect.push(brackets[symbol])
    } else if (last === symbol) {
      collect.pop()
    } else if (bracketsPair.has(symbol) && symbol !== last) {
      console.log(0)
      return 0
    }
  }
  console.log(collect.length ? 0 : 1)
  return collect.length ? 0 : 1
}

console.log('==END==>')

verify('ABC([[<>]])DEF') //-> 1
verify('---(++++)----') //-> 1
verify('') //-> 1
verify('before ( middle []) after ') //-> 1
verify(') (') //-> 0
verify('<(   >)') //-> 0
verify('(  [  <>  ()  ]  <>  )') //-> 1
verify('   (      [)') //-> 0
