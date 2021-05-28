var kmInput = prompt("Quanti chilomentri è distante la sua meta?");
var yearsInput = prompt("Quanti anni ha?")

var km = parseInt(kmInput);
var years = parseInt(yearsInput);
var outputElement = document.getElementById('output');

var ticketPrice = km * 0.21;
outputElement.innerHTML = 'Il prezzo del suo biglietto è € ' + (Math.round(ticketPrice * 100) / 100).toFixed(2);

if (years < 18) {
    ticketPrice = ticketPrice / 100 * 80;
    outputElement.innerHTML +='<br/>Complimenti, ha diritto ad uno sconto del 20% sul prezzo del suo biglietto, il prezzo scontanto è € ' + (Math.round(ticketPrice * 100) / 100).toFixed(2);
} else if (years >= 65) {
    ticketPrice = ticketPrice / 100 * 60;
    outputElement.innerHTML +='<br/>Complimenti, ha diritto ad uno sconto del 40% sul prezzo del suo biglietto, il prezzo scontanto è € ' + (Math.round(ticketPrice * 100) / 100).toFixed(2);
};
