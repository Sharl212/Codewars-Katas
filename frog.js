// A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. 
// The small frog always jumps a fixed distance, D.

// Count the minimal number of jumps that the small frog must perform to reach its target.

// Write a function:

// function solution(X, Y, D);

// that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

// For example, given:

//   X = 10
//   D = 30
//   Y = 85
// the function should return 3, because the frog will be positioned as follows:

// after the first jump, at position 10 + 30 = 40
// after the second jump, at position 10 + 30 + 30 = 70
// after the third jump, at position 10 + 30 + 30 + 30 = 100
// Write an efficient algorithm for the following assumptions:

// X, Y and D are integers within the range [1..1,000,000,000];
// X ≤ Y.

// half a second average on very small numbers
function solution(X, D, Y) {
    if(X > Y ||X == 0 || D == 0 || Y == 0) return 0
    if (X == Y) return 0 // doesn't have to jump
    if (D == Y) return 1 // would take one step 
    let difference = Y - D // calculate the distance left to reach the target Y
    let K = difference / D // calculate how many to add to D to reach Y
    let B = difference / Y // calculate how many steps to reach Y from the difference
    return Math.ceil(K+B)
}

function oldSolution(X, D, Y) {
    let result = 0;
    let i = 0;
    while (result < Y) {
        if (i == 0) {
            result += X + D
        } else {
            result += D
        }
        i++;
    }

    return i
}

X = 10
D = 30
Y = 85
console.time('time')
let New = solution(X, D, Y)
console.log(Math.ceil(New))
console.timeEnd('time')

// console.time('old Time')
// let Old = oldSolution(X, D, Y)
// console.log(Old)
// console.timeEnd('old Time')
