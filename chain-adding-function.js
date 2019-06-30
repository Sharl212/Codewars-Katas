function add (n) {
  var v = function (x) {
    return add(n + x)
  }

  v.valueOf = v.toString = function () {
    return n    
  }

  return v
}

// add(1) //== 1
test = +add(1)(2) //= = 3
test
// add(1)(2)(3) //== 6
