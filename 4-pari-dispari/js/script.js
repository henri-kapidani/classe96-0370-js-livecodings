/*
chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9.
Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.
Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari
(cioè i numeri vanno prima sommati e poi va visto se la somma è pari o dispari).
*/

/*
chiedere pari o dispari e metterlo nella variabile parity
chiedere un numero compreso tra 1 ed 9 e metterlo in userNumber
mettere in computerNumber un numero casuale tra 1 e 9
sommare userNumber e computerNumber e mettere il risultato in sum
SE (resto di sum / 2 = 0)
	SE (parity = pari)
		stampa: hai vinto
	ALTRIMENTI
		stampa: hai perso
	FINE SE
ALTIMENTI
	SE (parity = dispari)
		stampa: hai vinto
	ALTRIMENTI
		stampa: hai perso
	FINE SE
FINE SE
*/

/*
In alternativa il blocco condizionale si potrebbe scrivere cosi':
SE ((resto di sum / 2 e' 0 AND parity = pari) OPPURE (resto di sum / 2 e' 1 AND parity = dispari))
	stampa: hai vinto
ALTIMENTI
	stampa: hai perso
FINE SE
*/


const parity = prompt('Pari o dispari?').toLowerCase();
const userNumber = parseInt(prompt('Dammi un numero tra 1 e 9'));

// const computerNumber = Math.floor(Math.random() * (max - min + 1) ) + min
const computerNumber = Math.floor(Math.random() * 9) + 1;
const sum = userNumber + computerNumber;

console.log('user:', userNumber);
console.log('computer:', computerNumber);
console.log('parity:', parity);
console.log('somma:', sum);

if (sum % 2 == 0) {
	if (parity == 'pari') {
		console.log('hai vinto!');
	} else {
		console.log('hai perso :(');
	}
} else {
	if (parity == 'dispari') {
		console.log('hai vinto!');
	} else {
		console.log('hai perso :(');
	}
}


// if ((sum % 2 == 0 && parity == 'pari') || (sum % 2 == 1 && parity == 'dispari')) {
// 	console.log('hai vinto!');
// } else {
// 	console.log('hai perso :(');
// }
