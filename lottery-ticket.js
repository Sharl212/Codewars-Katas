function bingo (ticket, win) {
  let winCounter = 0
  ticket.map(tic => {
    let letters = tic[0].split('')
    let nums = tic[1]
    letters.map(letter => {
      if (letter.charCodeAt() == tic[1]) {
        winCounter++
      }
    })
  })
  return winCounter >= win ? 'Winner!': 'Loser!'
}

// bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2) //, 'Loser!'
test = bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)//, 'Winner!'
test
// bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3)//, 'Loser!'
