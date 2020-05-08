import Game from './game';

const input = document.querySelector('.game__input');
const button = document.querySelector('.game__start');
const countingDownText = document.querySelector('.game__time-value');
let countDown = 4;

function startGame() {
  countingDownText.classList.add('game__time-value--animate');
  const countingDown = setInterval(() => {
    countingDownText.textContent = countDown;

    if (countDown === 0) {
      clearInterval(countingDown);
    } else {
      countDown--;
    }
  }, 1000);
}

function unlockInput(e) {
  e.preventDefault();
  input.disabled = false;
  startGame();
}

button.addEventListener('click', unlockInput);
input.addEventListener('input', () => {
  // TODO: function call game.checkInput()
});
