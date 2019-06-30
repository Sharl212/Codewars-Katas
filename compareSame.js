function comp (array1, array2) {
  // if (array1 == [] || array2 == [] || array1.length !== array2.length) {
  //   return false
  // }
  let count = 0
  array1.map(num1 => {
    let arr = array2.filter(num2 => num1 == Math.sqrt(num2))
    let arrLength = arr.length
    count += arrLength
  })

  count
  return count == array1.length
}

a1 = [50, 71, 50, 50, 9, 30, 29, 42]

a2 = [2501, 5041, 2500, 2500, 81, 900, 841, 1764]

console.log(comp(a1, a2)) // true
