// Define variables
var wordList = ["Peugeot", "Audi", "Mercedes", "Porsche", 
                "Volkswagen", "Ferrari", "Fiat", "Lamborghini", 
                "Maserati", "Acura", "Datsun", "Honda", "Lexus", 
                "Toyota", "Nissan", "Kia", "Hyundai", "Volvo", 
                "Bentley", "Jaguar", "McLaren", "Chevortel", "Ford", 
                "Jeep", "Dodge", "Tesla", "Lincon", "Saleen", "Buick", 
                "Cadillac", "Chrysler", "Triumph"]

var validKeys = "abcdefghijklmnopqrstuvwxyz"                

var lettersGussed = "";
var lettersGuessedRight = 0;
var letterPosition = 0;
var numberOfGusses = 7;
var numberOfMisses = 0;
var numLetersinWord = "";
var guessedWord=[];
var displayWordStatus = "";
var LettersGussedRight = 0;
var wins = 0;
var losses = 0;
var x = 0;

function resetGame() {
    numberOfGusses = 0;
    lettersGussed = [];
    letterPossition = 0;
    lettersGuessedRight = 0;

    Word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
    console.log("Word: " + Word);

    displayWordStatus = '';
    numLetersinWord = Word.length;
    for ( i = 0; i < numLetersinWord; i++) {
        displayWordStatus = displayWordStatus + "_ ";
    }
}

resetGame();

// Get key from users
document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();

    // Is KEY a valid KEY [a-z]
    if (validKeys.indexOf(letter) !== -1) {
        
        // Has the KEY been pressed before?
        if (lettersGussed.indexOf(letter) !== -1) {
            // Get another KEY from user.
            console.log(letter + " has already been gussed.  Try again.")
        } else if (Word.indexOf(letter) !== -1) { // Does this KEY match one of the letters in the WORD?
            for (var j = 0; j < Word.length; j++){
                if (letter.indexOf(Word[j]) !== -1){
                    displayWordStatus = displayWordStatus + Word[j] + " ";
                    LettersGussedRight++;
                } else {
                    displayWordStatus = displayWordStatus + "_";
                }
            }
            if (lettersGussed.includes(Word) > true) {
                console.log("YOU WIN!");
        }
            } else {
                lettersGussed += letter;
                x++;
                console.log("BAD Guess: " + x);
            }
    } else {
        console.log("Invalid Letter. Try again.")
    }
    // Have I run out of guesses?
    if (x === numberOfGusses) {
        console.log("Game Over number of guess: " + numberOfGusses);
    }
}
