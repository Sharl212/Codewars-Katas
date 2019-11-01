// function solution(A, K) {
//     let shiftedArray;

//     for (let r = 0; r < K; r++) {
//         if (r == 0) {
//             shiftedArray = shiftArray(A)
//         } else {
//             shiftedArray = shiftArray(shiftedArray)
//         }
//     }

//     return shiftedArray
// }

// // helper
// const shiftArray = array => {
//     let shiftedArray = []; // store shifted array here
//     let lastIndex = array.length - 1; // last index of the passed array
//     shiftedArray[0] = array[lastIndex] // shift last index to first index

//     array.map((n, i) => i !== lastIndex ? shiftedArray[i + 1] = n : null)

//     return shiftedArray
// }

// A = [3, 8, 9, 7, 6]
// K = 100

// console.time('time')
// solution(A, K)
// console.timeEnd('time')


function solution(A, K) {
    let shiftedArray;

    for (let r = 0; r < K; r++) {
        if (r == 0) {
            shiftedArray = shiftArray(A)
        } else {
            shiftedArray = shiftArray(shiftedArray)
        }
    }
    return shiftedArray
}

// helper
const shiftArray = array => {
    let lastIndex = array.length - 1; // last index of the passed array
    let last = array.splice(lastIndex, 1)[0]
    array.unshift(last)
    return array
}

A = [3, 8, 9, 7, 6]
K = 24

console.time('time')
solution(A, K)
console.timeEnd('time')
