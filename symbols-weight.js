/* 
    ! = 2
    ? = 3
*/

function balance(left, right) {
    let rightScore = 0, leftScore = 0;
    right.split('').map(l => l == '!' ? rightScore += 2 : rightScore += 3);
    left.split('').map(l => l == '!' ? leftScore += 2 : leftScore += 3);
    return rightScore > leftScore ? 'Right' : rightScore == leftScore ? 'Balance' : 'Left'
}

balance("!!???!????", "??!!?!!!!!!!")// === "Balance"