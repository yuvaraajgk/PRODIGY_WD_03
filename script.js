const cells = document.querySelectorAll('[data-cell]');
const resetBtn = document.querySelector('.reset-btn'); // Reset Button

let currentPlayer = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

resetBtn.addEventListener('click', resetBoard); // Reset Button Event Listener

function handleCellClick(event) {
  const cell = event.target;
  if (cell.textContent === '') {
    cell.textContent = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + ' wins!');
      resetBoard();
    } else if (isDraw()) {
      alert('It\'s a draw!');
      resetBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function isDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
  });
}

function resetBoard() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.dataset.value = '';
  });
  currentPlayer = 'X';
}
