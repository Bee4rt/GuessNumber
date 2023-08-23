'use strict';

// Random Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// messageFunction
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// scoreFunction
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//checkButton
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // no number
  if (!guess) {
    displayMessage('⛔️ No Number!');

    // when guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    // css style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔺 Too high!' : '🔻 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 you lost the game');
    }
  }
  //number is too highv
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🔺 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' 💥 you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // number is to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🔻 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
});

//ButtonAgain playAgain the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // css style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
