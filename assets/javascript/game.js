//NEED A VARIABLE
//NEED A FUNCTION
//NEED TO CALL THE FUNCTION

var studentName = ["Janet", "Brian", "Justin", "Ryan", "Michael", "Steven", "Robert", "Nicole", "Larry", "Kurtis", "Elizabeth"]

var letters = ["a", "b", "e", "h", "i", "j", "k", "l", "m", "n", "o", "r", "s", "t", "u", "v", "y", "z"];

// letters not in names: c,d,f,g,p,q,w,x

var correctKeys = []

var answer;

var unsolved;

// COUNTERS
var userGuesses = 0;
var wrongGuesses = 0;
var guessesLeft = 0;
var wins = 0;
var losses = 0;

document.onkeyup = function(event) {
var keyPressed = event.key;
if (checkKeyPressed(keyPressed)) {
// then add letter to word-blanks
correctKeys.push(keyPressed)
} else {
  wrongGuesses += 1
}
};

function checkKeyPressed(key) {
    // key is found in word
    return true;
}

function setUp() {
    // select random studentName index. Get student name using random index and assign to answer variable.
    answer = studentName[Math.floor(Math.random() * studentName.length)];
    
    // get # of blanks from answer
    var numOfBlanks = answer.length;
    unsolved = Array(numOfBlanks).fill("_");
    // make list with _ _ _ to length of answer.
    // reset all counters to 0.
    resetCounters();
}
    // **code defined
function resetCounters() {
    userGuesses = 0;
    wrongGuesses = 0;
    guessesLeft = 0;
    wins = 0;
    losses = 0;
}