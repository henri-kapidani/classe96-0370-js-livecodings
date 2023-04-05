/*
Chiediamo all'utente due parole in successione.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.
*/



// let myVariable = 5;

// if (120) {   // 5 === '5' =>  '5' == '5'  => true
// 	console.log('vero');
// } else {
// 	console.log('falso');
// }


/*
	SE (totale > 50 e totale < 100)
		applica sconto
	stampa totale
*/

let total = 90;

if (total > 50 && total < 100) {
	/*
	total > 50 && total < 100
	200 > 50 && 200 < 100
	true && false
	false
	*/
	total = total - 10;
}

console.log(total);



let total2 = 120;

if (total2 < 50 || total2 > 100) {
	/*
	total2 < 50 || total2 > 100
	120 < 50 || 120 > 100
	false || true
	true
	*/
	total2 = total2 - 10;
}

console.log(total2);






/*
SE utente loggato
	non fare niente
ALTRIMENTI
	chiedi password
	fai controlli di sicurezza
	*/


if (userLogged) {
	//
	//
	//
} else {

}





if (userLogged) {
	//
	//
	//
}

if (!userLogged) {

}