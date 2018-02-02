
var alphabetLettersAndNumbers = ["1", "2", "3","4", "5", "6","7","8","9","0","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

var userGuess = null;

var letterAndNumberToBeGuessed = alphabetLettersAndNumbers[Math.floor(Math.random() * alphabetLettersAndNumbers.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterAndNumberToBeGuessed);

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();   

	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLettersAndNumbers.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;

		guessesLeft--;
    }
    
	newFunction(userGuess);


	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "Your guesses so far: " + guessesSoFar + "</h4></p>";

    document.querySelector("#game").innerHTML = html;
}

function newFunction(userGuess) {
    if (letterAndNumberToBeGuessed == userGuess) {
        wins++;
        console.log("You won!");
        guessesLeft = 9;
        guessesSoFar = [];
        letterAndNumberToBeGuessed = alphabetLettersAndNumbers[Math.floor(Math.random() * alphabetLettersAndNumbers.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterAndNumberToBeGuessed);
    }
    if (guessesLeft == 0) {
        losses++;
        console.log("You lost!");
        guessesLeft = 9;
        guessesSoFar = [];
        letterAndNUmberToBeGuessed = alphabetLettersAndNumbers[Math.floor(Math.random() * alphabetLettersAndNumbers.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterAndNumberToBeGuessed);
    }
}
