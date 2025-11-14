window.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');

    // Exercise 1: add the square class to each div
    squares.forEach(square => {
        square.classList.add('square');
    });
});
let currentPlayer = 'X';

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.textContent !== '' || status.classList.contains('you-won')) {
            return; 
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Switch turns
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

square.addEventListener('mouseenter', () => {
    square.classList.add('hover');
});

square.addEventListener('mouseleave', () => {
    square.classList.remove('hover');
});

const status = document.getElementById('status');

    function checkWinner() {
        const winningCombos = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];

        return winningCombos.some(combo => {
            const [a, b, c] = combo;
            return (
                squares[a].textContent !== '' &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            );
        });
    }

    // Update click function to include winner check:
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                if (checkWinner()) {
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add('you-won');
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });

    const newGame = document.querySelector('.btn');

    newGame.addEventListener('click', () => {
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });

        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove('you-won');

        currentPlayer = 'X';
    });