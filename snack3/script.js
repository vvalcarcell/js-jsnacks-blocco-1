/*
il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

var result = 0;

for (x = 1; x <= 10; x++) {
    result += parseInt(prompt('inserisci un numero'));
}

document.getElementById('print').innerHTML = result;







