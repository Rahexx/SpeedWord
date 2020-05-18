import Timer from './Timer';

class Game {
  constructor() {
    this.levelElement = document.querySelector('.game__level');
    this.passwordElement = document.querySelector('.game__password');
    this.levels = [
      {
        name: '1',
        countingDown: 8,
        passwords: ['Ania', 'Geralt'],
      },
      {
        name: '2',
        countingDown: 7,
        passwords: ['Mototechnika', 'Kolejarz', 'Pringles'],
      },
      {
        name: '3',
        countingDown: 6,
        passwords: ['Avengers', 'poliglota', 'Esej', 'Wielkolud'],
      },
      {
        name: '4',
        countingDown: 5,
        passwords: ['Madryt', 'Elektryk', 'Współczucie', 'Konsument'],
      },
      {
        name: '5',
        countingDown: 4,
        passwords: [
          'Kamieniołom',
          'Dziecko',
          'Krokodyl',
          'Aluminium',
          'Zwierzogród',
        ],
      },
    ];
    this.currentLevel = 1;
    this.currentCountingDown = 0;
    this.currentPassword = '';
    this.score = 0;
    this.gameTime = 0;
    this.timer = new Timer();
  }

  getLevels() {
    return this.levels;
  }

  getCurrentLevel() {
    return this.currentLevel;
  }

  setCurrentLevel(level) {
    this.currentLevel = level;
  }

  getCurrentCountingDown() {
    return this.currentCountingDown;
  }

  setCurrentCountingDown(time) {
    this.currentCountingDown = time;
  }

  getCurrentPassword() {
    return this.currentPassword;
  }

  setCurrentPassword(password) {
    this.currentPassword = password;
  }

  getScore() {
    return this.score;
  }

  setScore(number) {
    this.score = number;
  }

  getGameTime() {
    return this.gameTime;
  }

  setGameTime(time) {
    this.gameTime = time;
  }

  checkInputValue(value) {
    if (this.getCurrentPassword().toLowerCase() === value) {
      this.setScore(this.getScore() + 1);
      const level = this.getLevels()[this.getCurrentLevel() - 1];
      const currentPassword = this.getCurrentPassword();
      const lengthPasswords = level.passwords.length;
      const indexPassword = level.passwords.indexOf(currentPassword);
      const nextLevel = lengthPasswords - 1 === indexPassword;

      return [nextLevel, indexPassword + 1, true];
    }

    return [false, false];
  }

  setTextElement() {
    this.levelElement.textContent = this.getCurrentLevel();
    this.passwordElement.textContent = this.getCurrentPassword();
  }

  changeGameInfo(level, input, index) {
    this.setCurrentPassword(level.passwords[index]);
    this.setTextElement();
    input.value = '';
  }

  isNextLevel(nextLevel, index, input, game) {
    const level = nextLevel
      ? this.getLevels()[this.getCurrentLevel()]
      : this.getLevels()[this.getCurrentLevel() - 1];
    const counting = level.countingDown;

    if (nextLevel) {
      this.setCurrentLevel(level.name);
      this.changeGameInfo(level, input, 0);
    } else {
      this.changeGameInfo(level, input, index);
    }

    this.timer.reCount(counting, game);
  }

  checkResult(game) {
    const input = document.querySelector('.game__input');
    const button = document.querySelector('.game__start');
    const [nextLevel, index, result] = this.checkInputValue(
      input.value.toLowerCase(),
    );

    if (!this.getLevels()[this.getCurrentLevel()] && nextLevel) {
      this.timer.stopCount(this.getScore(), this.getGameTime());
      button.textContent = 'Start';
      button.style.opacity = 1;
      return;
    }

    if (result) this.isNextLevel(nextLevel, index, input, game);
  }

  startGame(game) {
    const level = this.getLevels()[0];
    const counting = level.countingDown;

    this.setCurrentLevel(level.name);
    this.setCurrentPassword(level.passwords[0]);
    this.setGameTime(0);
    this.setScore(0);
    this.setTextElement();

    this.timer.startCount(counting, game);
  }
}

export default Game;
