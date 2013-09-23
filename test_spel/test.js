/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var from, to, counter = 5,
    guess;

function random(from, to) {
    "use strict";
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function chance() {
    "use strict";
    var y = confirm("Do you want to try again");
    if (y === true) {
        alert(" Here we go again");
    } else {
        alert("dfd");
    }
}
from = Number(prompt("mata in värde1 : "));
to = Number(prompt("mata in värde2 : "));
//counter = random();
console.log(random(from, to));
var number = random(from, to);
while (counter > 0) {
    guess = Number(prompt("Enter a guess number: "));
    counter = counter - 1;
    if (number === guess) {
        alert("You win " + number);
        random(from, to);
        console.log(chance());
    }
    if (!guess) {
        break;
    }
    if (number > guess) {
        alert("Your number is too low " + guess);
    }
    if (number < guess) {
        alert("Your number is too high " + guess);
    }
}
console.log(chance());