/*
Chiedi un numero di 4 cifre all’utente;
Calcola la somma di tutte le cifre che compongono il numero.
Bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert.
*/

var num = prompt('Inserisci un numero di 4 cifre');

while (num.length !== 4 || isNaN(num)) {
    alert('Il numero deve essere formato da 4 cifre!');
    num = prompt('Inserisci un numero di 4 cifre');
}

var sum = 0;
for (var i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);
}

console.log(sum);