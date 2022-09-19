function longestCommonPrefix(param) {
    if (param === void 0) { param = []; }
    if (param.length === 0)
        return [];
    var result = '';
    var resultfirstWordArr = param[0].split('');
    // for (let index = 0; index < firstWordArr.length; index++) {
    //   const element = firstWordArr[index]
    //   console.log(element)
    //   for (let index = 1; index < firstWordArr.length; index++) {
    //     const element = firstWordArr[index]
    //   }
    // }
    // resultfirstWordArr.forEach()
    return param;
}
var stingArr = ['flower', 'flow', 'flight'];
console.log(stingArr);
var result = longestCommonPrefix(stingArr);
console.log(result);
