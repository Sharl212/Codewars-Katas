function solution(A) {
    if (!A || !A.length) return false;
    let isSameRequest = A.filter((n, i) => A.indexOf(n) === i).length
    if(isSameRequest <= 1) return false;

    let sum = 0;
    let result = false
    let count = 0;

    for (let i = 0; i < A.length - 1; i++) {
        a = A[i]
        b = A[i + 1]

        if (sum == b + a) {
            filter = A.filter((n, i) => n + A[i + 1] == sum).length
            count = filter
        } else {
            sum = b + a
        }

        if (count >= 3) {
            result = true
            break;
        }
    }
    result
    return result
}


A = [1, 1, 1, 1, 1, 1]
solution(A)