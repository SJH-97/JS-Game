# JS-Game

A fun game using vanilla JS, SCSS, CSS and HTML!

Link to Figma Framework:
https://www.figma.com/file/UiZcyrvrtvaYCehsu04rPX/Untitled?node-id=0%3A1

TypeQuest is a simple yet fun game built with vanilla JS, SCSS, CSS and HTML

The player types in "start" within the input box to initialise the game. When the game is initialised the countdown timer will begin from 10s.

At the same time the player will be presented with a random word selected from an array. The user must type in the word exactly to score a point.

Typing the word exactly will add 3s to the coundown timer and will add one point to the score.

The aim of the game is to type out as many words as possible before the timer runs out and therefore gain the highest score possible.

Upon the countdown timer finishing the game will return to the default state; prompting the timer to reset and having "type 'start' to play" in the input box. The highscore from the previous game will also be presented and will only update if initial score > high score.
