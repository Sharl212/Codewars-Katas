function balance (book) {
  let result = ''
  const linesArr = book.replace(/[/=+!:]/g, '').split('\n')
  const linesLength = linesArr.length
  const beginningBalance = linesArr[0]
  const assignBalance = `Original Balance: ${beginningBalance}`

  let balance = Number(beginningBalance)
  let totalExpenses = 0

  result += assignBalance

  linesArr.map((line, i) => {
    let expense = 0
    line
      .split(' ')
      .map(l =>
        l !== beginningBalance && l.length > 0 && Number(l) !== NaN
          ? (expense = Number(l))
          : null
      )[2]

    balance = balance - expense // decrease the balance by the specified expense amount
    totalExpenses = totalExpenses + expense // increase the total expenses by the expense amount
    if (line !== beginningBalance && line.length > 0 && Number(line) !== NaN) {
      result += `${line} Balance ${balance}\n`
    } else {
      result += '\n' // add new line
    }
    const assignTotalExpense = `Total expense  ${totalExpenses}`
    const assignAverageExpense = `Average expense  `

    if (i == linesLength - 2) {
      result += assignTotalExpense
    }
    if (i == linesLength - 1) {
      result += assignAverageExpense
    }
  })
  result
  return result
}

var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`

// var b1sol = `Original Balance: 1000.00\r
// 125 Market 125.45 Balance 874.55\r
// 126 Hardware 34.95 Balance 839.60\r
// 127 Video 7.45 Balance 832.15\r
// 128 Book 14.32 Balance 817.83\r
// 129 Gasoline 16.10 Balance 801.73\r
// Total expense  198.27\r
// Average expense  39.65`
balance(b1)
