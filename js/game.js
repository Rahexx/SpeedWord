class Game {
  constructor() {
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
}

export default Game;
