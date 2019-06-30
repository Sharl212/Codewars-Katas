function cakes (recipe, available) {
  let result = []
  for (let key in recipe) {
    let Rvalue = recipe[key]
    let Avalue = available[key]
    let equation = Avalue / Rvalue

    if (isNaN(equation)) {
      return 0
    } else {
      result.push(equation)
    }
  }
  return Math.floor(Math.min(...result))
}
// available/recipe

recipe = { flour: 500, sugar: 200, eggs: 1 }
available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }

cakes(recipe, available) //, 2, 'Wrong result for example #1'

// recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
// available = { sugar: 500, flour: 2000, milk: 2000 }
// test = cakes(recipe, available) //, 0, 'Wrong result for example #2'