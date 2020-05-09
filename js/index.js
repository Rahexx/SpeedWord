import Game from './game';
import { startCount } from './timer';

const input = document.querySelector('.game__input');
const button = document.querySelector('.game__start');
const levelElement = document.querySelector('.game__level');
const passwordElement = document.querySelector('.game__password');
const game = new Game();
let countingDown;

function setTextElement() {
  levelElement.textContent = game.getCurrentLevel();
  passwordElement.textContent = game.getCurrentPassword();
}

function checkResult() {
  const [nextLevel, index, result] = game.checkInputValue(
    this.value.toLowerCase(),
  );

  if (result) {
    const level = nextLevel
      ? game.getLevels()[game.getCurrentLevel()]
      : game.getLevels()[game.getCurrentLevel() - 1];

    if (nextLevel) {
      game.setCurrentLevel(level.name);
      game.setCurrentPassword(level.passwords[0]);
      setTextElement();
      input.value = '';
    } else {
      game.setCurrentPassword(level.passwords[index]);
      setTextElement();
      input.value = '';
    }
  }
}

function startGame() {
  const level = game.getLevels()[game.getCurrentLevel() - 1];
  const counting = level.countingDown;

  game.setCurrentLevel(level.name);
  game.setCurrentPassword(level.passwords[0]);
  setTextElement();

  countingDown = startCount(counting, countingDown, game);
}

function unlockInput(e) {
  e.preventDefault();
  input.disabled = false;
  startGame();
}

button.addEventListener('click', unlockInput);
input.addEventListener('input', checkResult);
