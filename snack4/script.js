/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

var invitati = ['angela', 'mario', 'andrea'];
var invito = prompt('Inserisci il tuo nome');
var flag = false;
for (var i = 0; i < invitati.length; i++) {
    if (invito === invitati[i]) {
        flag = true;
    }
}

if (flag) {
    document.getElementById('print').innerHTML = 'Benvenuto';
} else {
    document.getElementById('print').innerHTML = 'Non sei nella lista degli invitati';
}