const countingDownElement = document.querySelector('.game__time-value');
const passwordElement = document.querySelector('.game__password');

function stopCount(countingDown, score) {
  countingDownElement.style.animationIterationCount = 0;
  countingDownElement.style.transform = 'scale(1)';
  passwordElement.textContent = `Twój wynik wpisanych haseł to: ${score}`;

  clearInterval(countingDown);
}

function startCount(counting, countingDown) {
  let count = counting;
  countingDownElement.classList.add('game__time-value--animate');
  countingDownElement.style.animationIterationCount = count + 1;
  countingDown = setInterval(() => {
    countingDownElement.textContent = count;

    if (count === 0) {
      stopCount();
    } else {
      count--;
    }
  }, 1000);

  return countingDown;
}

export { stopCount, startCount };
