function solution(A) {
    if (!A || A.length <= 2) return 0;
    if (A.length == 1) return 1;
    A.sort((a, b) => a - b)
    const length = A.length;

    for (let i = 0; i < length; i++) {
        if (A[i] + 1 !== A[i + 1] && i !== length - 1) {
            return 0;
        }
    }

    return 1
}

A = []
// A[0] = 4
// A[1] = 1
// A[2] = 3
// A[3] = 2

// for (let i = 0; i < 100; i++) {
//     A[i] = i*2
// }
A
console.time('time')
t = solution(A)
console.timeEnd('time')
t