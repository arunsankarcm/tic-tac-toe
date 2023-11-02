// script.js

// Initialize game variables
let currentPlayer = 'X'; // Start with Player X's turn
let board = ['', '', '', '', '', '', '', '', '']; // Initialize the game board as an array of 9 empty strings

// Get all game cells and add click event listeners
const cells = document.querySelectorAll('.cell');
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        // Check if the cell is empty and there is no winner
        if (board[index] === '' && !checkWinner()) {
            // Update the game board and display the current player's symbol
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            // Switch to the other player's turn
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

// Function to check for a winner
function checkWinner() {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winCombinations) {
        const [a, b, c] = combination;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            // Display the winning player and end the game
            alert(`Player ${board[a]} wins!`);
            return true;
        }
    }

    if (board.every(cell => cell !== '')) {
        // If all cells are filled and no winner, it's a draw
        alert("It's a draw!");
        return true;
    }

    return false; // No winner yet, continue the game
}

const btn = document.getElementById('btn');

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    // Clear the game board
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach((cell) => {
        cell.textContent = '';
    });

    // Reset the current player to 'X'
    currentPlayer = 'X';

    
});





