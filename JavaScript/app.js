'use strict'

var password = 'ford';

for(var i = 0; i < 2; i++) {
    var correctPassword = prompt("Enter your password.");
    console.log(i);
    if (correctPassword === password){
        break;
    } 
    if (i === 1 && correctPassword != password) {
        alert("The password is 'ford.'");
        location.reload();
    }
}

function yeahFord() {
    var yeahFord = confirm("You ready to be Forded?");
    if (yeahFord == !true) {
        alert("Chicken. Try again.")
        location.reload()
    } else {
        alert("Heck yeah, you are!")
    }
}

function fordFocusQuotient(){
    var fordFocusQuotient = prompt("Enter your cool quotient.")
    if (fordFocusQuotient >= 6) {
        document.write("Boo yeah.")
    } else if (fordFocusQuotient <= 0) {
        document.write("We got you.")
    } else if (fordFocusQuotient >= 1) {
        document.write("Only one thing missing.")
    } else if (typeof fordFocusQuotient === 'string') {
        prompt("Enter numbers only.")
    } else if (fordFocusQuotient === null) {
        alert("Silence is a sign of weakness.")
        location.reload()
    }
}

    var randomNumber = Math.floor(Math.random() * 10);
    for (var i = 0; i < 2; i++) {
        var userGuess = prompt("Guess a number between 1 and 10.");
            if ((i === 1) && (randomNumber !== parseInt(userGuess))) {
                alert("Crumbs. See the top left of the page for the answer.");
                document.write("The number was " + randomNumber); 
        }   else if (parseInt(userGuess) === randomNumber) {
            alert("Winner!");
            break;
        }   else if (userGuess !== randomNumber) {
            alert("One more try. Good luck!")
        }
    }
