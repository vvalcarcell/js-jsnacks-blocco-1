var num = parseInt(prompt('Inserisci un numero'));
if (num % 2 === 0) {
    document.getElementById('print').innerHTML = num;
} else {
    document.getElementById('print').innerHTML = num + 1;
}