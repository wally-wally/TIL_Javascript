'use strict';

const shortid = require('shortid');
const { getRandomInt } = require('./util.js');
const answerSymbol = Symbol('answer');

class Baseball {

  constructor(id = shortid.generate(),
              history = [],
              done = false,
              answer,
              digit = 3) {
    this.id = id;
    this.history = history;
    this.done = done;
    this[answerSymbol] = answer || Baseball.makeAnswer(digit);
    this.digit = digit;
  }

  getId() {
    return this.id;
  }

  getAnswer() {
    return this[answerSymbol];
  }

  getDigit() {
    return this.digit;
  }

  getDone() {
    return this.done;
  }

  addHistory(result) {
    this.history.push(result);
  }

  setDone(done) {
    this.done = done;
  }

  matchAnswer(guess) {
    let strike = 0;
    let ball = 0;

    const answer = this.getAnswer();
    answer.forEach((v, i) => {
      if (guess[i] === v) {
        strike++;
      } else if (answer.indexOf(guess[i]) > -1) {
        ball++;
      }
    });

    return new Result(strike, ball);
  }

  static makeAnswer(digit) {
    let problem = [],
      numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < digit; i++) {
      let max = 9 - i,
        index = getRandomInt(0, max);
      problem.push(numbers[index]);
      numbers.splice(index, 1);
    }

    return problem;
  }

  static toObject(data) {
    const { id, history, done, answer, digit } = data;
    return new Baseball(id, history, done, answer, digit);
  }

  attachedAnswer() {
    return Object.assign({}, this, { answer: this.getAnswer() });
  }
}

class Result {
  constructor(strike, ball) {
    this.strike = strike;
    this.ball = ball;
  }

  toString() {
    let resultString = `${this.strike}S${this.ball}B`;
    if (this.strike === 0 && this.ball === 0) {
      resultString = 'OUT';
    }
    return resultString;
  }
}

module.exports = Baseball;