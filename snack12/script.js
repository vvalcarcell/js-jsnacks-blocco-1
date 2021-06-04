var firstName = ['Valentina', 'Federica', 'Rosaria', 'Antonio', 'Gianmarco'];
var surName = ['Valcarcell', 'Palma', 'Petrungaro', 'Rossi', 'Esposito'];

document.getElementById('list').innerHTML = 'Lista degli invitati alla grande festa:';

for (var x = 1; x <= 3; x++) {
    var htmlString = '<li>';
    htmlString += firstName[Math.floor(Math.random() * firstName.length)];
    htmlString += " " + surName[Math.floor(Math.random() * surName.length)];
    htmlString += '</li>';
    document.getElementById('list-name').innerHTML += htmlString;
}
