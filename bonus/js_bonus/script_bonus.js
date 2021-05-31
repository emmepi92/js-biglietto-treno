var km = parseInt(prompt("Quanti chilomentri è distante la sua meta?"));
var year= parseInt(prompt("In che anno è nato?"));

var outputElement = document.getElementById('output');
var ticketPrice = km * 0.21;
var currentYear = new Date().getFullYear();

if ((currentYear - year) < 18) {
    ticketPrice = ticketPrice / 100 * 80;
} else if ((currentYear - year) >= 65) {
    ticketPrice = ticketPrice / 100 * 60;
};

outputElement.innerHTML = "Prezzo Biglietto: € " + (ticketPrice).toFixed(2);