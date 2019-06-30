const compose = (f,g) => (...args) => {
    console.log(...args)
    return f(f(...args))
}  

add1 = function(a){return a + 1}
id = function(a){return a}

result = compose(add1,id)(0,12) // == 1

result