// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let num = null
    A.map((n, i)=>{
        const nextInt = A[i+2];
        if(n !== nextInt && nextInt !== undefined){
            num = nextInt
        }
    })
    return num
}

A = []
A[0] = 9
A[1] = 3
A[2] = 9
A[3] = 3
A[4] = 9
A[5] = 7
A[6] = 9
solution(A)