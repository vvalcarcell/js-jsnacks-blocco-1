var sum = 0;
for (var i = 1; i <= 5; i++) {
    var num = parseInt(prompt('Inserisci 5 numeri'));
    while (isNaN(num)) {
        alert('Attenzione! Non è un numero, riprova');
        num = parseInt(prompt('Inserisci altri 5 numeri'));
    }
    sum += num;
}

document.getElementById('stamp').innerHTML = sum;

var sum2 = 0;
var x = 1;
while (x <= 5) {
    var num2 = parseInt(prompt('Inserisci altri 5 numeri'));
    while (isNaN(num2)) {
        alert('Attenzione! Non è un numero, riprova');
        num2 = parseInt(prompt('Inserisci altri 5 numeri'));
    }
    sum2 += num2;
    x++;
}

document.getElementById('stamp').innerHTML += "<br>" + sum2;

