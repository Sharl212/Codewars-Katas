function Connect4 () {
  // Code Here
  this.board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
}

Connect4.prototype.play = function (input) {
  console.log(this.board[5][0])
  for (let col = 0; col < 5; col++) {
    for (let row = 0; row < 6; row++) {
      if (this.board[5][input] == 0) { // empty place
        this.board[5][input] =  input
        // return
      }
    }
  }
  // Code Here
  for (let r = 0; r < 6; r++) {
    let count = 0

    for (let col = 0; col < 6; col++) {
      const zero = this.board[r][col]
      if (
        zero !== 0 && // horizontal
        zero == this.board[r][col - 1] &&
        zero == this.board[r][col - 2] &&
        zero == this.board[r][col - 3]
      ) {
        console.log('horizontal')
        count += 1
      } else if (
        zero !== 0 && // vertical
        zero == this.board[r + 1][col] &&
        zero == this.board[r + 2][col] &&
        zero == this.board[r + 3][col]
      ) {
        console.log('vertical')
        count += 1
      } else if (
        zero !== 0 && // diagonally
        zero == this.board[r + 1][col - 1] &&
        zero == this.board[r + 2][col - 2] &&
        zero == this.board[r + 3][col - 3]
      ) {
        console.log('diagonally')
        count += 1
      }
    }
  }
}

game = new Connect4()
game.play(1) //, "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// game.play(0) //, "Player 2 has a turn", "Should return 'Player 2 has a turn'")

// game = new Connect4();
// Test.assertEquals(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(0), "Player 1 wins!", "Should return 'Player 1 wins!'")

// game = new Connect4();
// Test.assertEquals(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(4), "Column full!", "Should return 'Column full!'")

// game = new Connect4();
// Test.assertEquals(game.play(1), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(2), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(2), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(3), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(3), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(4), "Player 1 wins!", "Should return 'Player 1 wins!'")
// Test.assertEquals(game.play(4), "Game has finished!", "Should return 'Game has finished!'")
