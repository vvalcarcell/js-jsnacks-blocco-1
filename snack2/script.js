var n1 = prompt('Inserisci una parola');
var n2 = prompt("Inserisci un'altra parola");

if (n1.length > n2.length) {
    document.getElementById('print').innerHTML = n2 + " " + n1;
} else {
    document.getElementById('print').innerHTML = n1 + " " + n2;
}