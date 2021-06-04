var result = [];

for (var x = 1; x <= 6; x++) {
    var num = parseInt(prompt('inserisci un numero'));
    if (num % 2 !== 0) {
        result.push(num);
    }
}

console.log(result);