class Game {
  constructor() {
    this._levels = [
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
    this._currentLevel = 1;
    this._currentCountingDown = 0;
    this._currentPassword = '';
    this._score = 0;
    this._gameTime = 0;
  }

  get levels() {
    return this._levels;
  }

  set levels(newLevels) {
    this._levels = newLevels;
  }

  get currentLevel() {
    return this._currentLevel;
  }

  set currentLevel(level) {
    this._currentLevel = level;
  }

  get currentCountingDown() {
    return this._currentCountingDown;
  }

  set currentCountingDown(time) {
    this._currentCountingDown = time;
  }

  get currentPassword() {
    return this._currentPassword;
  }

  set currentPassword(password) {
    this._currentPassword = password;
  }

  get score() {
    return this._score;
  }

  set score(number) {
    this._score = number;
  }

  get gameTime() {
    return this._gameTime;
  }

  set gameTime(time) {
    this._gameTime = time;
  }

  checkInputValue(value) {
    if (this.currentPassword.toLowerCase() === value) {
      this.score = this.score + 1;
      const level = this.levels[this.currentLevel - 1];
      const currentPassword = this.currentPassword;
      const lengthPasswords = level.passwords.length;
      const indexPassword = level.passwords.indexOf(currentPassword);
      const nextLevel = lengthPasswords - 1 === indexPassword;

      return [nextLevel, indexPassword + 1, true];
    }

    return [false, false];
  }
}

export default Game;
