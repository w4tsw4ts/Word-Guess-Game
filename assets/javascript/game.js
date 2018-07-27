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
var lettersGuessedRight =0;
var numberOfGusses = 7;
var numberOfMisses =0;
var guessedWord=[];
var displayWordStatus = "";
var x=0;


// Pick a word from the list
var Word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase(); 

// Debug code to testing
console.log(Word);

// Get key from users
document.onkeyup = function(event) {
    var userLetter = event.key.toLowerCase();

    // Is KEY a valid KEY [a-z]
    if (validKeys.indexOf(userLetter) !== -1) {
        
        // Has the KEY been pressed before?
        if (lettersGussed.indexOf(userLetter) !== -1) {
            // Get another KEY from user.
            console.log("ALREADY GUESSED TRY AGAIN!!!")
        } else if (Word.indexOf(userLetter) !== -1) { // Does this KEY math one of the letters in the WORD?
            LettersGussedRight =0;
            for (var j = 0; j < Word.length; j++){
                if (userLetter.indexOf(Word[j]) !== -1){
                    displayWordStatus = displayWordStatus + Word[j] + " ";
                    LettersGussedRight++;
                } else {
                    displayWordStatus = displayWordStatus + "_";
                }
            }
            console.log(LettersGussedRight);
            console.log(displayWordStatus);
            console.log("MATCH: " + userLetter); // Reveal letter(s) on the screen Allan helped
            if (lettersGussed.includes(Word) > true) {
                console.log("YOU WIN!");
        }
            } else {
                lettersGussed += userLetter;
                x++;
                console.log("BAD Guess: " + x);
            }
    } else {
        console.log("Invalid KEY")
    }
    // Have I run out of guesses?
    if (x === numberOfGusses) {
        console.log("Game Over number of guess: " + numberOfGusses);
    }
}
