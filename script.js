// script.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const games = document.querySelectorAll('.game-title');

    games.forEach(function(game) {
        if (game.textContent.toLowerCase().includes(searchTerm)) {
            game.parentElement.style.display = 'block';
        } else {
            game.parentElement.style.display = 'none';
        }
    });
});
