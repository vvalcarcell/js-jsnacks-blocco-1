/*
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente attraverso un prompt. 
*/

var num = parseInt(prompt('Inserisci un numero'))

for (x = 1; x <= num; x++) {
    document.getElementById('print').innerHTML += " " + Math.pow(x, 3);
}




