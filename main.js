import { wordsArr } from "./word-array.js";

//default screen
document.querySelector("input").placeholder = "type 'start' to play";
document.querySelector("#clock").innerHTML = "10s";

window.addEventListener("load", () => {
  document.querySelector("input").oninput = initialiseGame;
});

const initialiseGame = () => {
  const text = document.querySelector("input").value.toLowerCase();
  if (text == "start") {
    getRandomWord();
    resetInputBox();
    initialiseTimer();
  }
};

//If player correctly types-in the random word from the array -> clear the input box and give them a new word.
let inputBox = document.querySelector("input");
const compareWords = (value) => {
  wordsArr.forEach((word) => {
    if (word === value) {
      getRandomWord();
      resetInputBox();
      startTime += 1;
      score += 1;
      currentScore();
    }
  });
};

inputBox.addEventListener("keyup", () => {
  compareWords(inputBox.value);
});

// Word Array functionality
const getRandomWord = () => {
  const randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  document.getElementById("word").innerHTML = randomWord;
};

// Countdown Timer functionality

let startTime = 10;
const initialiseTimer = () => {
  const countDownTimer = setInterval(() => {
    if (startTime <= 0) {
      clearInterval(countDownTimer);
      document.querySelector("input").placeholder = "Game Over!";
    } else {
      document.getElementById("clock").innerHTML = startTime + "s";
    }
    startTime -= 1;
  }, 1000);
};

// Current Score & High Score Functionality
let score = 0;
let highScore = 0;

const currentScore = () => {
  document.getElementById("cscore").innerHTML = `Score:${score}`;
};

const updateScore = () => {
  if (score >= highScore) {
    document.getElementById("hscore").innerHTML = `High Score:${score}`;
  } else if (score < highScore) {
    return;
  } else {
    alert("error!");
  }
};

// resetting input after typing correct word
const resetInputBox = () => {
  document.querySelector("input").value = "";
  document.querySelector("input").placeholder = "";
};
