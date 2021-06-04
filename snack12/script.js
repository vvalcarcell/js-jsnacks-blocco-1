var firstName = ['Valentina', 'Federica', 'Rosaria', 'Antonio', 'Gianmarco'];
var surName = ['Valcarcell', 'Palma', 'Petrungaro', 'Rossi', 'Esposito'];

var output = document.getElementById('list');

for (var x = 1; x <= 3; x++) {
    var htmlString = '<li>';
    var i = Math.floor(Math.random() * firstName.length);
    htmlString += firstName[i];
    var ii = Math.floor(Math.random() * surName.length);
    htmlString += " " + surName[ii];
    htmlString += '</li>';
    output.innerHTML += htmlString;
}
