import Game from './Game';

const input = document.querySelector('.game__input');
const button = document.querySelector('.game__start');
const game = new Game();

function unlockInput(e) {
  e.preventDefault();
  input.disabled = false;
  game.startGame(game);
  button.style.opacity = 0;
}

button.addEventListener('click', unlockInput);
input.addEventListener('input', () => game.checkResult(game));
