
var alphabetLettersAndNumbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

var userGuess = null;

var letterAndNumberToBeGuessed = alphabetLettersAndNumbers[Math.floor(Math.random() * alphabetLettersAndNumbers.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far:   " + guessesSoFar + " Computer picked: " + letterAndNumberToBeGuessed);

document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLettersAndNumbers.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;

        guessesLeft--;
    }

    newFunction(userGuess);


    var html ="<p><h1>The Psychic Game</h1></p>" + "<hr>" + "<p><h2>Guess what letter I'm thinking of</h2></p>" + "<hr>" + "<p><h2>Wins: " + wins + "</h2></p>" + "<p><h2>Losses: " + losses + "</h2></p>" + "<p><h2>Guesses Left: " + guessesLeft + "</h2></p>" + "<p><h2>Your guesses so far: " + guessesSoFar + "</h2></p>" + "<p><iframe src='https://giphy.com/embed/5xaOcLDE64VMF4LqqrK' width='200' height='195' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/drake-applause-glasses-5xaOcLDE64VMF4LqqrK'></p>"+  "<p><footer> Copyright &copy; 2018 Dulguun Enkhsaikhan</footer></p>"

    document.querySelector("#game").innerHTML = html;
}

function newFunction(userGuess) {
    if (letterAndNumberToBeGuessed == userGuess) {
        wins++;
        console.log("You won!");
        guessesLeft = 9;
        guessesSoFar = [];
        letterAndNumberToBeGuessed = alphabetLettersAndNumbers[Math.floor(Math.random() * alphabetLettersAndNumbers.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far:   " + guessesSoFar + " Computer picked: " + letterAndNumberToBeGuessed);
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
