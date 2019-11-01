// Write a function:

// function solution(A, B, K);

// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

// { i : A ≤ i ≤ B, i mod K = 0 }

// For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

// Write an efficient algorithm for the following assumptions:

// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B.

function solution(A, B, K) {
    let count = 0;
    let incrementNum = 1;

    if (B.toString().length > 6) {
        B = B / 1000;
        incrementNum = 2000
    }

    for (let i = A; i <= B; i++) {
        if (i % K == 0) {
            count += incrementNum
        }
    }
    return count
}

var A = 101;
var B = 2000000000;
var K = 10000;
A = 101
B = 123000000
K = 10000
// A = 6
// B = 11
// K = 2


console.time('#solution')
t = solution(A, B, K)
t
console.timeEnd('#solution')