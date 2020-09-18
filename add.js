'use strict'

var yeahFord = confirm("You ready to be Forded?");

if (yeahFord == !true) {
    alert("Chicken. Try again.")
    location.reload()
} else {
    alert("Heck yeah, you are!")
}


