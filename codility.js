// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    A.sort((a, b) => a > b)
    let biggestNumber = Math.max.apply(null, A)

    if (biggestNumber <= 0) {
        while (biggestNumber <= 0) {
            biggestNumber++;
        }
        return biggestNumber
    } else {
        let result = 0;
        A = A.filter((item, pos) => A.indexOf(item) == pos)

        A.map((n, i) => {
            if (n + 1 !== A[i + 1] && result == 0) {
                result = n + 1
            }
        })
        return result
    }
}
solution([1, 3])