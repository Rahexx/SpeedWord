import Game from './game';
import { stopCount, startCount } from './timer';

const input = document.querySelector('.game__input');
const button = document.querySelector('.game__start');
const levelElement = document.querySelector('.game__level');
const passwordElement = document.querySelector('.game__password');
const game = new Game();
let countingDown;

function checkResult() {
  const result = game.checkInputValue(this.value.toLowerCase());

  if (result) {
    game.setScore(game.getScore() + 1);
    stopCount(countingDown, game.getScore());
  }
}

function startGame() {
  const level = game.getLevels()[game.getCurrentLevel() - 1];
  const counting = level.countingDown;

  game.setCurrentLevel(level.name);
  game.setCurrentPassword(level.passwords[0]);

  levelElement.textContent = game.getCurrentLevel();
  passwordElement.textContent = game.getCurrentPassword();

  countingDown = startCount(counting, countingDown);
}

function unlockInput(e) {
  e.preventDefault();
  input.disabled = false;
  startGame();
}

button.addEventListener('click', unlockInput);
input.addEventListener('input', checkResult);
