import {wordArray} from './word-array.js'

const displayWord = document.querySelector(".countdown-box__word");
const displayTimer = document.querySelector(".countdown-box__clock");
const inputScreen = document.querySelector(".input-box__text");
const scoreScreen = document.querySelector(".current-score__text");
const highScoreScreen = document.querySelector(".high-score-box__text");

//Default screen
inputScreen.placeholder = "type 'start' to play!";
displayTimer.textContent = "10s";

initialiseGame()

const initialiseGame = () => {
  if (inputScreen.textContent === "start") {
    typeQuest.startGame()
  } else {
    return;
  }
};


const typeQuest = {
  //startGame Function, Holds the countDown function, randomWord function and resetGame function.
  startGame = () => {
    displayWord.textContent = randomWord();
    countDownFunction();
  },

  randomWord = () => {
    wordArray[Math.floor(Math.random() * wordArray.length)];
  },

  countDown = () => {
    let countDownFunction = setInterval(function () {
      if (timer <= 0) {
        clearInterval(countDownFunction);
        displayTimer.innerHTML = "Game Over!";
      } else {
        displayTimer.innerHTML = timer + "s";
      }
    });
  },

  displayScore = () => {
    if (highScore != Number) {
      score = highScore;
    } else if (score > highScore) {
      score = highScore;
    }
  }

}




let score = 0;
let highScore = 0;
let timer = 10 + "s";
 


