// Inserisci un numero, se è pari stampa il numero,se è dispari stampa il numero successivo

var num = parseInt(prompt('Inserisci un numero'));
if (num % 2 === 0) {
    document.getElementById('print').innerHTML = num;
} else {
    document.getElementById('print').innerHTML = num + 1;
}