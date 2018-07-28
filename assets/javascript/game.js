// Define variables
var wordList = ["Peugeot", "Audi", "Mercedes", "Porsche", 
                "Volkswagen", "Ferrari", "Fiat", "Lamborghini", 
                "Maserati", "Acura", "Datsun", "Honda", "Lexus", 
                "Toyota", "Nissan", "Kia", "Hyundai", "Volvo", 
                "Bentley", "Jaguar", "McLaren", "Chevortel", "Ford", 
                "Jeep", "Dodge", "Tesla", "Lincon", "Saleen", "Buick", 
                "Cadillac", "Chrysler", "Triumph"]

var validKeys = "abcdefghijklmnopqrstuvwxyz"                

var lettersGuessed = "";
var lettersGuessedRight = 0;
var letterPosition = 0;
var numberOfGuesses = 0;
var numberOfMisses = 9;
var numLetersinWord = "";
var guessedWord=[];
var displayWordStatus = "";
var win = 0;
var lose = 0;
var x = 0;

function resetGame() {
    numberOfGuesses = 0;
    lettersGuessed = [];
    letterPossition = 0;
    lettersGuessedRight = 0;

    Word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
    console.log("Word: " + Word);

    displayWordStatus = '';
    numLetersinWord = Word.length;
    for ( i = 0; i < numLetersinWord; i++) {
        displayWordStatus = displayWordStatus + "_ ";
    }
    console.log(displayWordStatus);
}

function stats() {
    var guesRemainDiv = document.getElementById("guessesRemaining");
        guesRemainDiv.textContent = numberOfMisses - numberOfGuesses;
    var disWordDiv = document.getElementById("displayword");
        disWordDiv.textContent = displayWordStatus;
    var disLetGusDiv = document.getElementById("lettersGuessed");
        disLetGusDiv.textContent = lettersGuessed;
    var disWinDiv = document.getElementById("win");
        disWinDiv.textContent = win;
    var disLosDiv = document.getElementById("lost");
        disLosDiv.textContent = lose;
}

resetGame();

// Get key from users
document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();

    // Is KEY a valid KEY [a-z]
    if (validKeys.indexOf(letter) !== -1) {
        
        // Has the KEY been pressed before?
        if (lettersGuessed.indexOf(letter) !== -1) {
            // Get another KEY from user.
            console.log(letter + " has already been gussed.  Try again.")
        } else {  // Letter is valid and has not been used before.
            lettersGuessed.push(letter);
            console.log(letter + " has not been guessed yet.");

            // Is the letter in the word? If so get the postion of the letter in the word.
            letterPosition = Word.indexOf(letter);
            if (letterPosition === -1) {
                numberOfGuesses++;
                console.log("This letter " + letter + " is NOT in word");
            } else {
                console.log("this letter " + letter + " is in the word");
                //Find where in the word the letter go.
                console.log("The letter is located in the array " + letterPosition);
                displayWordStatus = "";
                lettersGuessedRight = 0;
                for (var j = 0; j < Word.length; j++) {
                    if (lettersGuessed.indexOf(Word[j]) !== -1) {
                        displayWordStatus = displayWordStatus + Word[j] + " ";
                        lettersGuessedRight++;
                    } else {
                        displayWordStatus = displayWordStatus + "_ ";
                    }
                }
            }
            console.log("Display status " + displayWordStatus);
            console.log("Guessed right " + lettersGuessedRight + " Word len " + Word.length);
            console.log("Guesses " + numberOfGuesses + " Misses " + numberOfMisses);
            console.log("Letters Guessed " + lettersGuessed);
    
            stats();
        }
        if (lettersGuessedRight === Word.length) {
            win++
            console.log("You WIN!!! The word was " + Word);
            resetGame();
        }
        if (numberOfGuesses === numberOfMisses) {
            lose++;
            console.log("Sorry you lost. The word was " + Word);
            resetGame();
        }
        
    } else {
        console.log("Invalid Letter. Try again.")
    }
    stats();
}
