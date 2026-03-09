// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//L'utente inserisce le sue scelte
let paOdi = prompt('Pari o dispari?');
let paOdiUpper = paOdi.toUpperCase();
console.log(paOdiUpper);
let numUtente = prompt('Scegli un numero da 1 a 5');
let numUtente2 = Number(numUtente);
console.log(numUtente2);

//Se l'utente sbaglia a inserire i dati
if (paOdiUpper !== 'PARI' && paOdiUpper !== 'DISPARI') {

    let error = alert('Valore inserito errato, riavvia la pagina e riprova');

} else if (numUtente > 5 || numUtente <= 0) {

    let error = alert('Valore inserito errato, riavvia la pagina e riprova');

}

//Computer Random
function computerRandom (inputNum, inputPD) {

    let numSorted = Math.floor((Math.random() * 5) + 1);
    let numSorted2 = Number(numSorted);
    console.log(numSorted2);

    let somma = inputNum + numSorted2;
    console.log(somma);
    

    if (somma % 2 == 0 && inputPD == 'PARI') {

        let victory = alert('Complimenti, hai vinto')
        return victory;

    } else if (somma % 2 != 0 && inputPD == 'DISPARI') {

        let victory = alert('Complimenti, hai vinto')
        return victory;

    } else {

        let defeat = alert('Oh no! Hai perso..');
        return defeat;

    }
}

computerRandom (numUtente2, paOdiUpper);