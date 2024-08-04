# Rock Paper Scissors Game

## Description

This is a simple implementation of the classic Rock Paper Scissors game, where a player competes against an AI opponent. The game is built using HTML, CSS, and JavaScript, providing an interactive web-based interface.

## Features

- Player can choose their hand (Rock, Paper, or Scissors) by clicking on the corresponding image.
- AI opponent randomly selects its hand.
- Game results are displayed after each round, showing both player and AI choices.
- Running score is kept, tracking the number of games played, wins, losses, and draws.
- Visual feedback is provided through color-coded results and highlighting of the player's selection.

## How to Play

1. Select your hand by clicking on one of the provided options (Rock, Paper, or Scissors).
2. Click the "LET'S PLAY" button to start the game.
3. The AI will randomly choose its hand, and the result will be displayed.
4. The game statistics will update automatically.
5. Continue playing as many rounds as you like!

## Game Logic

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- If both players choose the same hand, it's a draw

## Implementation Details

- The game uses DOM manipulation to update the UI dynamically.
- Event listeners are used to handle player input and game flow.
- The AI's choice is randomized using JavaScript's Math.random() function.
- Game state and statistics are maintained using JavaScript objects.
