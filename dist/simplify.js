// ‘a’ and ‘b’ are single character strings
const func = (s, a, b) => Math.max(s.lastIndexOf(a), s.lastIndexOf(b))

console.log(func('aaacvca', 'a', 'c'))
