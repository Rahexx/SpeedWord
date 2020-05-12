import Game from './Game.js';
import { startCount, reCount, stopCount } from './timer.js';

const input = document.querySelector('.game__input');
const button = document.querySelector('.game__start');
const levelElement = document.querySelector('.game__level');
const passwordElement = document.querySelector('.game__password');
const game = new Game();
let countingDown;

function setTextElement() {
  levelElement.textContent = game.currentLevel;
  passwordElement.textContent = game.currentPassword;
}

function checkResult() {
  const [nextLevel, index, result] = game.checkInputValue(
    this.value.toLowerCase(),
  );

  if (!game.levels[game.currentLevel] && nextLevel) {
    stopCount(countingDown, game.score, game.gameTime);
    button.textContent = 'Start';
    return;
  }

  if (result) {
    const level = nextLevel
      ? game.levels[game.currentLevel]
      : game.levels[game.currentLevel - 1];
    const counting = level.countingDown;

    if (nextLevel) {
      game.currentLevel = level.name;
      game.currentPassword = level.passwords[0];
      setTextElement();
      input.value = '';
    } else {
      game.currentPassword = level.passwords[index];
      setTextElement();
      input.value = '';
    }
    countingDown = reCount(countingDown, game, counting);
  }
}

function startGame() {
  const level = game.levels[0];
  const counting = level.countingDown;

  game.currentLevel = level.name;
  game.currentPassword = level.passwords[0];
  game.gameTime = 0;
  game.score = 0;
  setTextElement();
  countingDown = startCount(counting, countingDown, game);
}

function unlockInput(e) {
  e.preventDefault();
  input.disabled = false;
  button.textContent = 'Zrestartuj';
  startGame();
}

button.addEventListener('click', unlockInput);
input.addEventListener('input', checkResult);
