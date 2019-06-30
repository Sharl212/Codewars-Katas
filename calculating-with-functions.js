function zero (...args) {
  return arguments.length < 1 ? 0 : operator[args[0].opr](args[0].n, 0)
}
function one (...args) {
  return arguments.length < 1 ? 1 : operator[args[0].opr](args[0].n, 1)
}
function two (...args) {
  return arguments.length < 1 ? 2 : operator[args[0].opr](args[0].n, 2)
}
function three (...args) {
  return arguments.length < 1 ? 3 : operator[args[0].opr](args[0].n, 3)
}
function four (...args) {
    
  return arguments.length < 1 ? 4 : operator[args[0].opr](args[0].n, 4)
}
function five (...args) {
  return arguments.length < 1 ? 5 : operator[args[0].opr](args[0].n, 5)
}
function six (...args) {
  return arguments.length < 1 ? 6 : operator[args[0].opr](args[0].n, 6)
}
function seven (...args) {
  return arguments.length < 1 ? 7 : operator[args[0].opr](args[0].n, 7)
}
function eight (...args) {
  return arguments.length < 1 ? 8 : operator[args[0].opr](args[0].n, 8)
}
function nine (...args) {
  return arguments.length < 1 ? 9 : operator[args[0].opr](args[0].n, 9)
}

function plus (n) {
  return { n, opr: '+' }
}
function minus (n) {
  return { n, opr: '-' }
}
const operator = {
  '+': (a, b) => Math.floor(a + b),
  '-': (a, b) => Math.floor(b-a),
  '/': (a, b) => Math.floor(b/a),
  '*': (a, b) => Math.floor(b*a),
}
function times (n) {return {n, opr: '*'}}
function dividedBy (n) {return  {n, opr: '/'} }

// seven(times(five())) //, 35
test = four(plus(nine())) //, 13
test
test = eight(minus(three())) //, 5
test
test = six(dividedBy(two())) //, 3
test