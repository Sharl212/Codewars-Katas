var advantageCount = function (A, B) {
    for (let i = 0; i < A.length; i++) {
        // console.log(i, A)
        console.log(A[i])
        if (A[i] <= B[i]) {
            let closest = A[i] + A[i + 1]
            console.log(A[i])
            console.log(A[i + 1])
            for (let j = 0; j < A.length; j++) {
                if (i !== j && A[j] >= A[i]) {
                    let total = A[i] + A[j]
                    console.log(j, A[j])
                    console.log(i, A[i])
                    console.log(A)
                    if (j == 4) {
                        console.log(A[j], A[i])
                        console.log(closest)
                        console.log(total)
                        console.log(A)
                    }
                    if (total < closest) {
                        console.log(A[i], A[j])
                        tmp = A[j]
                        A[j] = A[i]
                        A[i] = tmp
                        closest = total;
                    }
                }
            }
        }
    }
    // original = [5621, 1743, 5532, 3549, 9581]
    // correct result = [1743, 9581, 5532, 5621, 3549]
    A
    B
    return A
};


function getClosestNumber(i, A) {
    // basically returns the closest number thats bigger than the given number index
    let closest = A[i] + A[i + 1]
    for (let j = 0; j < A.length; j++) {
        if (i !== j && A[j] >= A[i]) {
            let total = A[i] + A[j]
            if (total < closest) {
                return A[j]
            }
        }
    }
}
x = getClosestNumber(2, [5, 3, 5, 7])
x




function t() {
    let b = [1, 2, 3]
    for (let i = 0; i < b.length; i++) {
        b[i] = 2
        b
    }
}
t()
// A = [12, 24, 8, 32], B = [13, 25, 32, 11]
// Output: [24, 32, 8, 12]
// A = [2, 0, 4, 1, 2]
// B = [1, 3, 0, 0, 2]
//[2,0,2,1,4]

// A = [2, 7, 11, 15]
// B = [1, 10, 4, 11]
//Output: [2,11,7,15]
c = [5621, 1743, 5532, 3549, 9581]
B = [913, 9787, 4121, 5039, 1481]

advantageCount(c, B)