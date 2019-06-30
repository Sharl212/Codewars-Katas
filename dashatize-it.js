function dashatize (num) {
  if (isNaN(num)) return num
  num = num.toString()
  let result = '';

  for (let i = 0; i < num.length; i++) {
    const number = num[i]
    const resultArray = result.split('')
    if (num[i] % 2 !== 0 && i !== 0 && i !== num.length - 1) {
      result +=
        resultArray[resultArray.length - 1] == '-'
          ? `${number}-`
          : `-${number}-`
    } else {
      result += `${number}`
    }
  }
  return result
}

console.log(dashatize(4843)) // "2-7-4", "Should return 2-7-4"
