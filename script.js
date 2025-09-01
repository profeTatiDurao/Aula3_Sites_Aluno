let currentPlayer = 'X';
const board = [];

function startGame() {
  const gameBoard = document.getElementById('');
  gameBoard.innerHTML = '';
  currentPlayer = 'X';

  for (let i = 0; i < 3; i++) {
    //matriz externa (linhas)
    board[i] = [];
    for (let j = 0; j < 3; j++) {
      //matriz interna (colunas)
      board[i][j] = '';
      
      
    }
  }
}

function handleClick(e) {
 
}

function checkWin(player) {
  // Verifica linhas
 

  // Verifica colunas
  

  // Verifica diagonais
  

 
}

function disableBoard() {
 
}

startGame();