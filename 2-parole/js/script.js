/*
Chiediamo all'utente due parole in successione.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.
*/

/*
chiedere word1
chiedere word2
SE (lunghezza word1 > lunghezza word2) {
	stampare: la parola piu' lunga e' word1
} ALTRIMENTI SE (lunghezza word2 > lunghezza word1) {
	stampare: la parola piu' lunga e' word2
} ALTRIMENTI {
	stampare: sono uguali
}
*/

const word1 = prompt('Dammi una parola');
const word2 = prompt('Dammi un\'altra parola');

if (word1.length > word2.length) {
	console.log("La parola piu' lunga e': " + word1);
} else if (word2.length > word1.length) {
	console.log("La parola piu' lunga e': " + word2);
} else {
	console.log("Le parole hanno stessa lunghezza");
}
