function solution(A) {
    if (!A || A.length <= 1 || typeof A !== 'object') return 0;
    const sortedA = A.sort((a, b) => a > b)
    const BeforeMissingElement = sortedA.find((n, i) => {
        // if current n doesn't equal the next element, and n is not the last element in the array
        const nextElement = A[i + 1];
        if (n !== nextElement && n + 1 !== nextElement && i !== A.length - 1) {
            return n
        }
    })
    if (!!BeforeMissingElement) { // if anything where found 
        return BeforeMissingElement + 1
    } else {
        return 0;
    }
}

A = []
A[0] = 1
A[1] = 2
A[2] = 3
A[3] = 5.54312
// let i = 0
// while(i < 19000) {
//     i++;
//     A[i+1] = i*3
// }
console.log(A)
t = solution(A)
t