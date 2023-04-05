/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/


const firstName = prompt('Quale e\' il tuo nome?');
const lastName = prompt('Quale e\' il tuo cognome?');
const color = prompt('Quale e\' il tuo colore preferito?');

// const password = firstName + lastName + color + '23';

// const password = `<span class="firstname" style="font-size: 50px;">${firstName}</span><span class="lastname">${lastName}</span><span class="color">${color}</span>23`;

const password = '<span class="firstname" style="font-size: 50px;">' + firstName + '</span><span class="lastname">' + lastName + '</span><span class="color">' + color + '</span>23';

document.getElementById('password').innerHTML = password;




// document.getElementById('password').innerHTML = prompt('Quale e\' il tuo nome?') + prompt('Quale e\' il tuo cognome?') + prompt('Quale e\' il tuo colore preferito?') + '23';
