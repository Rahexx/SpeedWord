const countingDownElement = document.querySelector('.game__time-value');
const passwordElement = document.querySelector('.game__password');

function stopCount(countingDown, score, time) {
  countingDownElement.style.animationIterationCount = 0;
  countingDownElement.style.transform = 'scale(1)';
  passwordElement.textContent = `Twój wynik wpisanych haseł to: ${score} w czasie: ${time}s`;

  clearInterval(countingDown);
}

function startCount(counting, countingDown, game) {
  let count = counting;
  countingDownElement.classList.add('game__time-value--animate');
  countingDownElement.style.animationIterationCount = count;
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

export default startCount;
