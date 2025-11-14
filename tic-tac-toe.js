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
        if (square.textContent === '') {     // only fill empty squares
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