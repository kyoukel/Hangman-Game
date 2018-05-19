# Hangman-Game

## Overview

Create the computer game `Hangman`. 

User guesses a letter, letters guessed are displayed, correct letters are inserted into the mystery word, if you guess the mystery word before the max guesses count is reached, you win! Timer then resets and new game is ready to be played. 

* When the user wins, a green winner banner is displayed at the top that says: `CONGRATULATIONS YOU'RE A WINNER!`
* When the user loses, a red loser banner is displayed at the top that says: `Nope, try again!`
* All banners remain at the top to track winning status & count number of games played.

## Hangman Game Functionality

1. Choose a theme for your game! You can choose any subject for your theme, though, so be creative!

2. Use key events to listen for the letters that your players will type.

### Display the following on the page:

   - [x] Press any key to get started!

   - [x] Wins: (# of times user guessed the word correctly).

   - [x] If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   - [x] As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

   - [x] Number of Guesses Remaining: (# of guesses remaining for the user).

   - [x] Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

   - [x] After the user wins/loses the game should automatically choose another word and make the user play it.

### Challenge Yourself with these bonuses:

1. Play a sound or song when the user guesses their word correctly, like in our demo.

2. Write some stylish CSS rules to make a design that fits your game's theme.

### HARD MODE:

3. Organize your game code as an object, except for the key events to get the letter guessed. 

   > This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.

4. Save your whole game and its properties in an object.

5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.

6. Don't forget to place your global variables and functions above your object. 

   > Remember: global variables, then objects, then calls.

## GOOD LUCK!