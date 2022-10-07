const bigObject = {
  value1: '111',
  value11: '12121',
  value2: {
    lvl1: 'sl1',
    lvl2: {
      lvl3: 'sl3',
      lvl4: {
        lvl5: 'sl5',
      },
    },
  },
}

const myFoo = (path = '', paramObj: object): object => {
  let result = {}
  for (let index in paramObj) {
    const value: string | object = paramObj[index]
    const newIndex = path ? `${path}.${index}` : index
    if (typeof value === 'object') {
      console.log('object')
      console.log({ path, index, value })

      const fooRes: object = myFoo(newIndex, value)
      console.log(fooRes)

      result = { ...result, ...fooRes }
    } else {
      result = { ...result, [newIndex]: value }
    }
  }
  return result
}

console.log('====>')

console.log('FINAL:', myFoo('', bigObject))
