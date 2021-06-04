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