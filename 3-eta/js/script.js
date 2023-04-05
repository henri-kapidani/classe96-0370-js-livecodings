/*
chiedere all'utente con due prompt gli anni di due persone
e comunicare quale delle due è più grande (ignorando il caso che siano uguali)
*/

/*
chiedere age1
chiedere age2
SE (age1 non e' un numero OPPURE age2 non e' un numero)
	stampare: Beccato! hai inserito valori non validi!
ALTRIMENTI
	SE age1 > age2
		stampare: la persona 1 e' piu' grande
	ALTRIMENTI
		stampare: la persona 2 e' piu' grande
	FINE SE
FINE SE
*/

const age1 = parseInt(prompt("Inserire eta' della prima persona")); // ciao => NaN
const age2 = parseInt(prompt("Inserire eta' della seconda persona")); // '15' => 15

/*
isNaN(age1) || isNaN(age2)
isNaN(NaN) || isNaN(15)
true || false
true
*/
if (isNaN(age1) || isNaN(age2)) {
	console.log('Beccato! hai inserito valori non validi!');
} else {
	if (age1 > age2) {
		console.log("la persona 1 e' piu' grande");
	} else {
		console.log("la persona 2 e' piu' grande (oppure sono uguali)");
	}
}


/*
25 && 0
true && false
false
*/
// non funziona se una delle eta' e' 0 perche' 0 e' falsy
// if (age1 && age2) {
// 	if (age1 > age2) {
// 		console.log("la persona 1 e' piu' grande");
// 	} else {
// 		console.log("la persona 2 e' piu' grande (oppure sono uguali)");
// 	}
// } else {
// 	console.log('Beccato! hai inserito valori non validi!');
// }
