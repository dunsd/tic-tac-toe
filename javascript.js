const container = document.querySelector('.board');
const squares = container.querySelectorAll('.square');
squares.forEach((square) => square.addEventListener('click', (e) => gameBoard.addMarker(e)));

const resultDisplay = document.querySelector('.result');

const player = (() => {
  let currentPlayer = 0;
  const player1Marker = 'X';
  const player2Marker = 'O';
  let currentMarker = 'X';

  const changePlayer = () => {
    if (currentPlayer === 1) {
      currentPlayer = 0;
      currentMarker = player1Marker;
    } else {
      currentPlayer = 1;
      currentMarker = player2Marker;
    }
  };

  const checkPlayer = () => currentPlayer;

  const getMarker = () => {
    const marker = currentMarker;
    changePlayer();
    return marker;
  };

  return {
    getMarker,
    checkPlayer,
  };
})();

const gameBoard = (() => {
  const board = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

  const checkIfMarker = (x, y) => {
    if (board[y][x] === 'X' || board[y][x] === 'O') {
      return true;
    }
    return false;
  };

  const addMarker = (e) => {
    console.log(gameFlow.getGameState());
    if (gameFlow.getGameState() === 1) {
      const x = e.target.getAttribute('data-x');
      const y = e.target.getAttribute('data-y');
      if (checkIfMarker(x, y)) { return; }
      board[y][x] = player.getMarker();
      e.target.textContent = board[y][x];
      gameFlow.checkResult();
    } else {
      console.log('game is over');
    }
  };

  const getBoardValue = (x, y) => board[y][x];

  return {
    addMarker,
    getBoardValue,
  };
})();

const gameFlow = (() => {
  let turn = 0;
  let gameActive = 1;

  const checkTurn = () => {
    if (turn === 9) {
      resultDisplay.textContent = 'Tie game';
      gameActive = 0;
    }
  };

  const checkResult = () => { // checks all winning combinations
    if ((gameBoard.getBoardValue(0, 0) === gameBoard.getBoardValue(1, 1)
    && gameBoard.getBoardValue(1, 1) === gameBoard.getBoardValue(2, 2))
    || (gameBoard.getBoardValue(0, 0) === gameBoard.getBoardValue(0, 1)
    && gameBoard.getBoardValue(0, 1) === gameBoard.getBoardValue(0, 2))
    || (gameBoard.getBoardValue(0, 0) === gameBoard.getBoardValue(1, 0)
    && gameBoard.getBoardValue(1, 0) === gameBoard.getBoardValue(2, 0))
    || (gameBoard.getBoardValue(0, 2) === gameBoard.getBoardValue(1, 2)
    && gameBoard.getBoardValue(1, 2) === gameBoard.getBoardValue(2, 2))
    || (gameBoard.getBoardValue(2, 0) === gameBoard.getBoardValue(2, 1)
    && gameBoard.getBoardValue(2, 1) === gameBoard.getBoardValue(2, 2))
    || (gameBoard.getBoardValue(2, 0) === gameBoard.getBoardValue(1, 1)
    && gameBoard.getBoardValue(1, 1) === gameBoard.getBoardValue(0, 2))
    || (gameBoard.getBoardValue(0, 1) === gameBoard.getBoardValue(1, 1)
    && gameBoard.getBoardValue(1, 1) === gameBoard.getBoardValue(2, 1))
    || (gameBoard.getBoardValue(1, 0) === gameBoard.getBoardValue(1, 1)
    && gameBoard.getBoardValue(1, 1) === gameBoard.getBoardValue(1, 2))) {
      if (player.checkPlayer() === 1) {
        resultDisplay.textContent = 'Player 1 wins';
        gameActive = 0;
      } else {
        resultDisplay.textContent = 'Player 2 wins';
        gameActive = 0;
      }
    }
    turn += 1;
    checkTurn();
  };

  const getGameState = () => {
    console.log(gameActive);
    return gameActive;
  };

  return {
    checkResult,
    getGameState,
  };
})();
