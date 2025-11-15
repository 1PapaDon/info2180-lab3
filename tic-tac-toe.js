window.addEventListener('DOMContentLoaded', () => {
    
    // Get all 9 squares
    const squares = document.querySelectorAll('#board div');

    // EXERCISE 1: Add square class
    squares.forEach(square => {
        square.classList.add('square');
    });

    let currentPlayer = 'X';
    let gameActive = true;

    const status = document.getElementById('status');

    // All winning combinations
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    // Check winner
    function checkWinner() {
        return winningCombos.some(combo => {
            const [a, b, c] = combo;

            return (
                squares[a].textContent !== '' &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            );
        });
    }

    // Add hover + click listeners
    squares.forEach(square => {

        // EXERCISE 3: Hover
        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });

        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });

        // EXERCISE 2, 4 & 6: Gameplay
        square.addEventListener('click', () => {

            // Don’t allow moves after win or overwriting
            if (!gameActive || square.textContent !== '') return;

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (checkWinner()) {
                status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                status.classList.add('you-won');
                gameActive = false;
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        });
    });

    // EXERCISE 5: New Game
    const newGame = document.querySelector('.btn');

    newGame.addEventListener('click', () => {
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });

        status.textContent =
            "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove('you-won');

        currentPlayer = 'X';
        gameActive = true;
    });

});