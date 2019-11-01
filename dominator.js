function solution(A) {
    if (A.length <= 1) return 0

    let dominator = -1
    let maxCount = Math.round(A.length / 2);

    for (let n of A) {
        const index = A.indexOf(n)
        let count = 0;
        for (let i of A) {
            if (n == i) {
                count++
                if (count > maxCount) {
                    dominator = index
                }
            }
        }

        if (count > maxCount) {
            maxCount = count
        }
    }

    return dominator
}

A = []
A[0] = -1
A[1] = -1
A[2] = 3
A[3] = -1
A[4] = 3
A[5] = -1
A[6] = 3
A[7] = -1
A[8] = 5

t = solution(A)
t