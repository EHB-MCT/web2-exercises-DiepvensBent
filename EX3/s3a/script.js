let number = Math.floor(Math.random() * (20 - 1) + 1);
console.log(number);

window.onload = function () {
    document.getElementById("form").addEventListener('submit', event => {
        let guessedNumber;
        event.preventDefault();
        guessedNumber = document.getElementById("guess").value;
        compareNumber(guessedNumber);
    });
}

function compareNumber(nr) {
    if (nr < 1 || nr > 20) {
        alert("number is not within range");
    } else if (nr < number) {
        alert("The mystery number is higher. Guess again!");
    } else if (nr > number) {
        alert("The mystery number is lower. Guess again!");
    } else if (nr == number) {
        alert("You have guessed the mystery number!");
    } else {
        alert("That is not a valid number (Error)");
    }
}