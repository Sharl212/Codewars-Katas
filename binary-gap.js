// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    let gap = 0;
    const binary = (N >>> 0).toString(2);
    const allGaps = binary.match(/(?!1)(0+)(?=1)/)

    allGaps.map((zeroes)=> gap =+ zeroes.length)
    allGaps
    return gap
}

solution(1376796946)