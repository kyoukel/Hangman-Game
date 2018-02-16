//NEED A VARIABLE
//NEED A FUNCTION
//NEED TO CALL THE FUNCTION

var studentName = ["Janet", "Brian", "Justin", "Ryan", "Michael", "Steven", "Robert", "Nicole", "Larry", "Kurtis", "Elizabeth"]

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var inCorrectKeys = []

var answer;

var unsolved;

var level = 2;

var timer =8000;

// COUNTERS
var userGuesses = 0;
var wrongGuesses = 0;
var guessesLeft = 0;
var wins = 0;
var losses = 0;

document.onkeyup = function (event) {
    var keyPressed = event.key;
    if (letters.includes(keyPressed) && !inCorrectKeys.includes(keyPressed)) {


        if (checkKeyPressed(answer, keyPressed)) {
            var matches = findAllMatches(answer, keyPressed);
            unsolved = updateInUnsolved(matches, keyPressed, unsolved)

        } else {
            wrongGuesses += 1
            guessesLeft -= 1
            inCorrectKeys.push(keyPressed)
        }
        if (unsolved.join("") === answer.toLowerCase()) youWon()
        if (guessesLeft <= 0) youLose()

        pageView()
    }
};

function endGameToast(won) {
    var newDiv = document.createElement("div");
    if (won) {
        newDiv.innerHTML = "CONGRATULATIONS YOU'RE A WINNER!";
        newDiv.setAttribute("class", "alert alert-success");
    } else {
        newDiv.innerHTML = "Nope, Try Again!";
        newDiv.setAttribute("class", "alert alert-danger");
    }
    document.getElementById("alert").appendChild(newDiv);
}

function youWon() {
    console.log("youWon")
    wins += 1
    endGameToast(true)
    setTimeout(restartGame, timer)
}

function youLose() {
    console.log("youLost")
    losses += 1
    endGameToast(false)
    setTimeout(restartGame, timer)
}

function restartGame() {
    console.log("game restart")
    setUp(randomIndex(studentName.length))
    resetCounters();
    pageView();
}

function maxGuesses(level, word) {
    return Math.floor(word.length * level)
}

function updateInUnsolved(matches, keyPressed, unsolvedABC) {
    var copy = Object.assign([], unsolvedABC)
    matches.forEach(function (index) {
        copy[index] = keyPressed
    });
    return copy
}

function findAllMatches(word, attempt) {
    var wordList = word.toLowerCase().split("")
    console.log(wordList)
    console.log(attempt)
    var wordMatchReducer = function (accumulator, value, index) {
        if (value === attempt) {
            return accumulator.concat(index)
        } else {
            return accumulator
        }
    }
    return wordList.reduce(wordMatchReducer, [])
}

function checkKeyPressed(word, key) {
    return word.toLowerCase().includes(key)
}

function randomIndex(length) {
    return Math.floor(Math.random() * length)
}

// Everything below this is VIEW related
function pageView() {
    //replaced with below // document.querySelector("#word-blanks").innerHTML = normalizeUnsolved(unsolved)
    updateById("#word-blanks", normalizeUnsolved(unsolved))
    updateById("#user-guesses", normalizeUnsolved(inCorrectKeys))
    updateById("#wrong-guesses", wrongGuesses)
    updateById("#guesses-left", guessesLeft)
    updateById("#win-counter", wins)
    updateById("#loss-counter", losses)
}



function updateById(selector, input) {
    document.querySelector(selector).innerHTML = input
}

function normalizeUnsolved(unsolved) {
    return unsolved.join(" ")
}

function setUp(index) {
    // select random studentName index. Get student name using random index and assign to answer variable.
    answer = studentName[index];

    // get # of blanks from answer
    var numOfBlanks = answer.length;
    unsolved = Array(numOfBlanks).fill("_");
    // make list with _ _ _ to length of answer.
    // reset all counters to 0.

}
// **code defined
function resetCounters() {
    userGuesses = 0;
    wrongGuesses = 0;
    guessesLeft = maxGuesses(level, answer);
    inCorrectKeys = []
}

setUp(randomIndex(studentName.length))
resetCounters();
pageView();