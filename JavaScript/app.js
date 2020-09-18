'use strict'

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
    var fordFocusQuotient = prompt("Enter your cool quotient.");
    if (fordFocusQuotient >= 6) {
        document.write("Boo yeah.");
    } else if (fordFocusQuotient <= 0) {
        document.write("We got you.")
    } else if (fordFocusQuotient >= 1) {
        document.write("Only one thing missing.")
    } else if (typeof fordFocusQuotient === 'string')
        prompt("Enter numbers only.")
}


