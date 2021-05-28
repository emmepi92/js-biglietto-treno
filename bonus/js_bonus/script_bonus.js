var km = parseInt(prompt("Quanti chilomentri è distante la sua meta?"));
var year= parseInt(prompt("In che anno sei nato?"));

var outputElement = document.getElementById('output');
var ticketPrice = km * 0.21;

if ((2021 - year) < 18) {
    ticketPrice = ticketPrice / 100 * 80
} else if ((2021 - year) >= 65) {
    ticketPrice = ticketPrice / 100 * 60;
}

outputElement.innerHTML = "Prezzo Biglietto: € " + (ticketPrice).toFixed(2);