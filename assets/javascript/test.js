function assert(expected, actual, message = "Test") {
    if (isObject(expected)) expected = JSON.stringify(expected)
    if (isObject(actual)) actual = JSON.stringify(actual)
    if (expected === actual) {
        console.log('. ' + message)
    } else {
        console.log('X ' + message + "\n Assertion failed no match\n   expected: " + expected + "\n   actual: " + actual)
    }
}

function assert_true(actual, message) {
    assert(true, actual, message)
}

function assert_false(actual, message) {
    assert(false, actual, message)
}

function isObject(value) {
    return typeof value === "object" && value != null
}

var wrongAttempt = "c"
var word = "book"
var attempt = "o"
var us = ["_", "_", "_", "_"]
var matches = [1, 2]
var expected = ["_", "o", "o", "_"]
assert(expected, updateInUnsolved(matches, attempt, us))

assert(["_", "m", "_", "_"], updateInUnsolved([1], "m", us))

assert(matches, findAllMatches(word, attempt))

assert_true(checkKeyPressed(word, attempt))

assert_false(checkKeyPressed(word, wrongAttempt))