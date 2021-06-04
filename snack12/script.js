/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati.
*/

var firstName = ['Valentina', 'Federica', 'Rosaria', 'Antonio', 'Gianmarco'];
var surName = ['Valcarcell', 'Palma', 'Petrungaro', 'Rossi', 'Esposito'];
var guestList = [];

document.getElementById('list').innerHTML = 'Lista degli invitati alla grande festa:';

while (guestList.length < 3) {
    var guestName = firstName[Math.floor(Math.random() * firstName.length)];
    var guestSurname = surName[Math.floor(Math.random() * surName.length)];
    var guest = guestName + " " + guestSurname;

    if (!guestList.includes(guest)) {
        document.getElementById('list-name').innerHTML += '<li>' + guest + '</li>';
        guestList.push(guest);
    }
}
