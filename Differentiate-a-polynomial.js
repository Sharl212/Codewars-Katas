function differentiate (equation, point) {
  let eqStructure = { operators: [] }
  let operatorsRegex = /[+-]/g
  let equationWithoutOperators = equation.split(operatorsRegex)  
  equation.split('').map(eq => {
    let index = equation.indexOf(eq)
    if (eq.match(operatorsRegex)) {
      eqStructure.operators.push({ index, operator: eq })
    }
  })
  equationWithoutOperators
  eqStructure
}

// differentiate('12x+2', 3) //, 12);
// differentiate('x^2-x', 3) //, 5);
differentiate('-5x^2+10x+4', 3) //, -20);
