function deepCompare (o1, o2) {
  let isIdentical = false

  for (let key1 in o1) {
    let val1 = o1[key1]
    for (let key2 in o2) {
      let val2 = o2[key2]
      if(typeof val1 == 'object'){
        deepCompare(val1, val2)
      }
      // if (val1 == val2 && key1 == key2) {
      //   isIdentical = true
      // }
    }
  }
  return isIdentical
}

deepCompare({ name: {first: 'Joe'} }, { name: 'Joe' })
