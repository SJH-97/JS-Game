import { wordsArr } from "./word-array.js";

// Word Array functionality

// const randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];

// document.getElementById("word").innerHTML = randomWord;

// Countdown Timer functionality
// let startTime = 10;

// const countDownTimer = setInterval(() => {
//   if (startTime <= 0) {
//     clearInterval(countDownTimer);
//     document.querySelector("input").value = "Game Over!";
//   } else {
//     document.getElementById("clock").innerHTML = startTime + "s";
//   }
//   startTime -= 1;
// }, 1000);

// High Score Functionality
// let score = 10;
// let highScore = 10;

// const updateScore = () => {
//   if (score >= highScore) {
//     document.getElementById("hscore").innerHTML = `High Score:${score}`;
//   } else if (score < highScore) {
//     return;
//   } else {
//     alert("error!");
//   }
// };
// updateScore();

// Initialising the game:
// window.addEventListener("load", () => {
//   document.querySelector("input").oninput = initialiseGame;
// });

// const initialiseGame = () => {
//   const text = document.querySelector("input").value.toLowerCase();
//   if (text == "start") {
//     alert("its working");
//   }
// };
