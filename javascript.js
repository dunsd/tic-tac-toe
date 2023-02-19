// create player module
const player = (() => {
//   const _player1Score = 0;
//   const _player2Score = 0;
  let currentPlayer = 1;
  const player1Marker = 'X';
  const player2Marker = 'O';
  const currentMarker = 'X';
  const addScore = (score) => {
    console.log('add score');
  };

  const changePlayer = () => {
    if (currentPlayer === 1) {
      currentPlayer = 0;
    } else {
      currentPlayer = 1;
    }
  };
  return {
    addScore,
    player1Marker,
    player2Marker,
  };
})();
const container = document.querySelector('.board');

const gameBoard = (() => {
  const makeGrid = (gridSize) => {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('click', (e) => {
        e.target.textContent = 'test';
      });
      container.appendChild(square);
    }
  };

  return {
    makeGrid,
  };
})();

gameBoard.makeGrid(3);
