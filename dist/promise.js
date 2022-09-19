const delay = (param) =>
  new Promise((res, rej) => setTimeout(() => res(param), param))

// delay(1000)
// delay(100)
// delay(500)

const arrayOfPromise = [1000, 500, 100, 10]

;(async () => {
  arrayOfPromise.map(async (item) => console.log(await delay(item)))
})()
