const countingDownElement = document.querySelector('.game__time-value');
const passwordElement = document.querySelector('.game__password');
const input = document.querySelector('.game__input');
const button = document.querySelector('.game__start');

function stopCount(countingDown, score, time) {
  countingDownElement.style.animationIterationCount = 0;
  countingDownElement.style.animationPlayState = 'paused';
  countingDownElement.style.transform = 'scale(1)';
  passwordElement.textContent = `Twój wynik wpisanych haseł to: ${score} w czasie: ${time}s`;
  button.textContent = 'Start';
  input.value = '';
  input.disabled = true;
  clearInterval(countingDown);
}

function startCount(counting, countingDown, game) {
  let count = counting;
  countingDownElement.classList.add('game__time-value--animate');
  countingDownElement.textContent = count;

  countingDown = setInterval(() => {
    if (count === 0) {
      stopCount(countingDown, game.getScore(), game.getGameTime());
    } else {
      game.setGameTime(game.getGameTime() + 1);
      count--;
    }

    countingDownElement.textContent = count;
  }, 1000);

  return countingDown;
}

function reCount(countingDown, game, counting) {
  countingDownElement.classList.remove('game__time-value--animate');
  clearInterval(countingDown);
  const indexInterval = startCount(counting, countingDown, game);

  return indexInterval;
}

export { startCount, reCount, stopCount };
