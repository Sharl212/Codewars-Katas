function solution(A, B, F) {
    let arr = []

    for (let i = 0; i < A.length - 1; i++) {
        let An = A[i]
        let Bn = B[i]
        let highestSum = 0
        let highestSumA=0;
        let highestSumB=0;
        for (let j = i+1; i < A.length - 1; i++) {
            if(A[i] + A[j] > highestSumA) {
                highestSumA = A[i] + A[j]
            }
            if(B[i] + B[j] > highestSumB) {
                highestSumB = B[i] + B[j]
                
            }
            if ( A[i] + A[j]  + B[j] + B[i] > highestSum) {
                highestSum =  A[i] + A[j] + B[j] + B[i]
            }
        }
        highestSum
        highestSumA
        highestSumB
    }

}

A = [4, 2, 1], B = [2, 5, 3]
F = 2

solution(A, B, F)