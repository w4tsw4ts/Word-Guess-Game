// Define variables
var wordList = ["Peugeot", "Audi", "Mercedes", "Porsche", 
                "Volkswagen", "Ferrari", "Fiat", "Lamborghini", 
                "Maserati", "Acura", "Datsun", "Honda", "Lexus", 
                "Toyota", "Nissan", "Kia", "Hyundai", "Volvo", 
                "Bentley", "Jaguar", "McLaren", "Chevortel", "Ford", 
                "Jeep", "Dodge", "Tesla", "Lincon", "Saleen", "Buick", 
                "Cadillac", "Chrysler", "Triumph"]

var validKeys = "abcdefghijklmnopqrstuvwxyz"                

var lettersGussed =[];
var match;
var numberOfGusses = 7;
var x=0;
var guessedWord=[];
var p;
var s='';

// Pick a word from the list
var computerPickWord = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase(); 
for (i = 0; i < length.computerPickWord; ++i) {
    guessedWord.push("_");
}

console.log(computerPickWord);

// Get key from users
document.onkeyup = function(event) {
    var userLetter = event.key.toLowerCase();
    /* console.log("user picked: " + userLetter); */

    // Is KEY a valid KEY [a-z]
    if (validKeys.indexOf(userLetter) > -1) {
        
        // Has the KEY been pressed before?
        if (lettersGussed.indexOf(userLetter) > -1) {
            // Get another KEY from user.
            console.log("ALREADY GUESSED TRY AGAIN!!!")
        } else if (p = computerPickWord.indexOf(userLetter) > -1) { // Does this KEY math one of the letters in the WORD?
            guessedWord[p] = userLetter;
            for (i = 0; i < length.guessedWord; i++) {
                s = s + guessedWord[i];
            }
            console.log("MATCH: " + guessedWord); // Reveal letter(s) on the screen
            lettersGussed += userLetter;
            if (lettersGussed.includes(computerPickWord) > true) {
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
