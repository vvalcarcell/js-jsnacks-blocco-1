// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

var n1 = parseInt(prompt('Inserisci un numero'));
var n2 = parseInt(prompt('Inserisci un altro numero'));

if (n1 > n2) {
    document.getElementById('stamp').innerHTML = n1;
} else {
    document.getElementById('stamp').innerHTML = n2;
}


