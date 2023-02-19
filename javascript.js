// create player module
const player = (() => {
  let currentPlayer = 0;
  const player1Marker = 'X';
  const player2Marker = 'O';
  let currentMarker = 'X';
  const addScore = (score) => {
    console.log('add score');
  };

  const changePlayer = () => {
    if (currentPlayer === 1) {
      currentPlayer = 0;
      currentMarker = player1Marker;
    } else {
      currentPlayer = 1;
      currentMarker = player2Marker;
    }
  };

  const getMarker = () => {
    const marker = currentMarker;
    changePlayer();
    return marker;
  };

  return {
    addScore,
    getMarker,
  };
})();

const gameBoard = (() => {
  const rows = 3;
  const columns = 3;
  const board = [['', '', ''], ['', '', ''], ['', '', '']];

  const printBoard = () => {
    console.log(board);
  };

  const addMarker = (e) => {
    const x = e.target.getAttribute('data-x');
    const y = e.target.getAttribute('data-y');
    board[y][x] = 99;
    console.log(board);
    e.target.textContent = 'X';
  };

  return {
    printBoard,
    addMarker,
  };
})();
const container = document.querySelector('.board');
const squares = container.querySelectorAll('.square');
squares.forEach((square) => square.addEventListener('click', (e) => gameBoard.addMarker(e)));
gameBoard.printBoard();
