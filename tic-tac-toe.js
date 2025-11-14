window.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');

    // Exercise 1: add the square class to each div
    squares.forEach(square => {
        square.classList.add('square');
    });
});
