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
const container = document.querySelector('.board');

const gameBoard = (() => {
  const rows = 3;
  const columns = 3;
  const board = [['', '', ''], ['', '', ''], ['', '', '']];

  for (let i = 0; i < rows; i += 1) {
    board[i] = [];
    for (let j = 0; j < columns; j += 1) {
      board[j] = [];
    }
  }

  //   const makeGrid = (gridSize) => {
  //     container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  //     container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  //     for (let i = 0; i < gridSize * gridSize; i += 1) {
  //       const square = document.createElement('div');
  //       square.classList.add('square');
  //       square.addEventListener('click', (e) => {
  //         e.target.textContent = player.getMarker();
  //       });
  //       container.appendChild(square);
  //     }
  //   };

  return {
    // makeGrid,
  };
})();

gameBoard.makeGrid(3);
