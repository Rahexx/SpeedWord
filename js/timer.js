class Timer {
  constructor() {
    this.countingDownElement = document.querySelector('.game__time-value');
    this.passwordElement = document.querySelector('.game__password');
    this.input = document.querySelector('.game__input');
    this.button = document.querySelector('.game__start');
    this.countingDown = 0;
    this.numberGame = 0;
  }

  setAnimationStylePause() {
    this.countingDownElement.style.animationIterationCount = 0;
    this.countingDownElement.style.animationPlayState = 'paused';
    this.countingDownElement.style.transform = 'scale(1)';
  }

  blockInput() {
    this.input.value = '';
    this.input.disabled = true;
  }

  stopCount(score, time) {
    this.setAnimationStylePause();
    this.passwordElement.textContent = `Twój wynik wpisanych haseł to: ${score} w czasie: ${time}s`;
    this.button.textContent = 'Start';
    this.button.style.opacity = 1;
    this.blockInput();
    this.numberGame += 1;
    clearInterval(this.countingDown);
  }

  setAnimationPlay() {
    this.countingDownElement.style.animationIterationCount = 'infinite';
    this.countingDownElement.style.animationPlayState = 'running';
  }

  startCount(counting, game) {
    if (this.numberGame) this.setAnimationPlay();

    let count = counting;
    this.countingDownElement.classList.add('game__time-value--animate');
    this.countingDownElement.textContent = count;

    this.countingDown = setInterval(() => {
      if (count === 0) {
        this.stopCount(game.score, game.gameTime);
      } else {
        game.gameTime += 1;
        count--;
        this.countingDownElement.textContent = count;
        if (count === 0) this.stopCount(game.score, game.gameTime);
      }
    }, 1000);
  }

  reCount(counting, game) {
    this.countingDownElement.classList.remove('game__time-value--animate');
    clearInterval(this.countingDown);
    this.startCount(counting, game);
  }
}

export default Timer;
