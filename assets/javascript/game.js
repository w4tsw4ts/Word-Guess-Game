var wordList = ["Peugeot", "Audi", "Mercedes", "Porsche", 
                "Volkswagen", "Ferrari", "Fiat", "Lamborghini", 
                "Maserati", "Acura", "Datsun", "Honda", "Lexus", 
                "Toyota", "Nissan", "Kia", "Hyundai", "Volvo", 
                "Bentley", "Jaguar", "McLaren", "Chevortel", "Ford", 
                "Jeep", "Dodge", "Tesla", "Lincon", "Saleen", "Buick", 
                "Cadillac", "Chrysler", "Triumph"]

var lettersGussed =[];
var match;
var numberOfGusses = 12;

var computerPickWord = wordList[Math.floor(Math.random() * wordList.length)]; 

document.onkeyup = function(event) {
    var userLetter = event.key;
    // Already pressed?
    if (lettersGussed.indexOf(userLetter) >-1) {
        console.log("ALREADY GUESSED TRY AGAIN!!!")
    } else { // New letter guessed
        lettersGussed += userLetter;
        console.log(lettersGussed);
    }
}
