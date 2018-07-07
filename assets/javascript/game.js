//NEED A VARIABLE
//NEED A FUNCTION
//NEED TO CALL THE FUNCTION

// ***NEED TO DO: NEED TO REMOVE OTHER WIN/LOSE ALERTS FROM DISPLAY SCREEN AFTER GAME IS OVER.***

// THIS CODE WAS CREATED THROUGH PAIRED PROGRAMMING WITH COMBINED EFFORTS & CONTRIBUTION FROM BOTH TODD PICKELL AND KIMBERLY YOUKEL.

// PSEUDOCODE COMPLETED BY KIMBERLY YOUKEL.

// Array of student names or wordBank
var studentName = ["Anthony", "Janet", "Brian", "Justin", "Kyler", "Ryan", "Daniel", "Kimberly", "Roberto", "Nicholas", "Amjad", "Michael", "Christian", "Edgar", "Kangxian", "Vu", "Andre", "Steven", "Jacob", "Robert", "Ben", "Nicole", "Andrew", "Larry", "Kurtis", "Elizabeth", "Todd", "Polly", "Brice", "Luke", "David", "Min"]

// Valid characters accepted.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var inCorrectKeys = []
var answer;
var unsolved;
// determine the number of max guesses by * the length of the word by 2.
var level = 2;
// restart game every 8 seconds once win or loss is determined.
var timer = 5000; 

// COUNTERS
var userGuesses = 0;
var wrongGuesses = 0;
var guessesLeft = 0;
var wins = 0;
var losses = 0;

// Functionality of the game. When valid and invalid character keys are pressed...
document.onkeyup = function (event) {
    var keyPressed = event.key;
    if (letters.includes(keyPressed) && !inCorrectKeys.includes(keyPressed)) {

        // when correct key is pressed run functions to insert correct character(s)
        if (checkKeyPressed(answer, keyPressed)) {
            var matches = findAllMatches(answer, keyPressed);
            unsolved = updateInUnsolved(matches, keyPressed, unsolved)
        // if wrong keys are pressed increase wrongGuesses by 1 and decrease guessLeft by 1.
        } else {
            wrongGuesses += 1
            guessesLeft -= 1
            inCorrectKeys.push(keyPressed)
        }
        // When answer is guessed and user wins, run youWon function and alert. When user has lost, run youLose function and alert.
        if (unsolved.join("") === answer.toLowerCase()) youWon()
        if (guessesLeft <= 0) youLose()
        // run pageView function when user has won or lost / when game is over.
        pageView()
    }
};
// When the user has won, pop up congratulations alert, and when user runs out of guesses, pop up try again alert.
function endGameToast(won) {
    var newDiv = document.createElement("div");
    if (won) {
        newDiv.innerHTML = "CONGRATULATIONS YOU WON!";
        newDiv.setAttribute("class", "alert alert-success");
    } else {
        newDiv.innerHTML = "OH NO! BETTER LUCK NEXT TIME!";
        newDiv.setAttribute("class", "alert alert-danger");
    }
    document.getElementById("alert").appendChild(newDiv);
}
// add 1 point when user wins and restart game when timer times out.
function youWon() {
    wins += 1
    endGameToast(true)
    setTimeout(restartGame, timer)

}
// add 1 point when user losses and restart game when timer times out.
function youLose() {
    endGameToast(false)
    setTimeout(restartGame, timer)
}
// restart game and counters when game starts and restarts with setup function.
function restartGame() {
    console.log("game restart")
    setUp(randomIndex(studentName.length))
    resetCounters();
    pageView();
}
// randomly determine the number of maximum guesses per word by * the length of the word by 2.
function maxGuesses(level, word) {
    return Math.floor(word.length * level)
}
// Search each index for When the correct letter of the word in the array matches the unsolved word, return the correct character to display in the answer.
function updateInUnsolved(matches, keyPressed, unsolvedABC) {
    var copy = Object.assign([], unsolvedABC)
    matches.forEach(function (index) {
        copy[index] = keyPressed
    });
    return copy
}
// 
function findAllMatches(word, attempt) {
    // when word is selected from list, give a space between the letters and scan words within ""...not sure if my understanding is correct yet???
    var wordList = word.toLowerCase().split("")
    console.log(wordList)
    console.log(attempt)
    
    // function that determines when to stop searching the array and reduce...still working on this one???
    var wordMatchReducer = function (accumulator, value, index) {
        if (value === attempt) {
            return accumulator.concat(index)
        } else {
            return accumulator
        }
    } 
    // reduce the ...
    return wordList.reduce(wordMatchReducer, [])
}
// when valid key is pressed and matches word, return only lowercase letters.
function checkKeyPressed(word, key) {
    return word.toLowerCase().includes(key)
}
// determines the length of the word selected from the array.
function randomIndex(length) {
    return Math.floor(Math.random() * length)
}

// Everything below this is VIEW related
function pageView() {
    //replaced with below // document.querySelector("#word-blanks").innerHTML = normalizeUnsolved(unsolved)
    // targeting html id's with updateById function and passing through other functions and params...still working on this one.???
    updateById("#word-blanks", normalizeUnsolved(unsolved))
    updateById("#user-guesses", normalizeUnsolved(inCorrectKeys))
    updateById("#wrong-guesses", wrongGuesses)
    updateById("#guesses-left", guessesLeft)
    updateById("#win-counter", wins)
    updateById("#loss-counter", losses)
}

// function when used will input or insert text or data at the #Id insertion point within the html. Not sure how to word that.
function updateById(selector, input) {
    document.querySelector(selector).innerHTML = input
}
// function when used will normalize and join...still working on this one.???
function normalizeUnsolved(unsolved) {
    return unsolved.join(" ")
}

function setUp(index) {
    // select random studentName index. Get student name using random index and assign to answer variable.
    answer = studentName[index];

    // Defined variable as length of answer to get the # of spaces for the student name that was chosen in the array and passing it through to fill in the length of the word with blank underscores.
    var numOfBlanks = answer.length;
    unsolved = Array(numOfBlanks).fill("_");

}
// // reset all counters to 0 when game starts.
function resetCounters() {
    userGuesses = 0;
    wrongGuesses = 0;
    // passing level and answer through maxGuesses function to reset the counter.
    guessesLeft = maxGuesses(level, answer);
    inCorrectKeys = []
}

// When game starts and restarts, choose a random name by index within the length of the array of studentNames, and reset counters.
setUp(randomIndex(studentName.length))
resetCounters();
pageView();