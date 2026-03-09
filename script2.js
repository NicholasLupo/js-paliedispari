//L'utente inserisce le sue scelte
let paOdi = prompt('Pari o dispari?');
let paOdiUpper = paOdi.toUpperCase();
console.log(paOdiUpper);
let numUtente = prompt('Scegli un numero da 1 a 5');
let numUtente2 = Number(numUtente);
console.log(numUtente2);

//Computer Random
function computerRandom(inputNum, inputPD) {

    //Se l'utente sbaglia a inserire i dati
    if (inputPD !== 'PARI' && inputPD !== 'DISPARI') {

        let error = alert('Valore inserito errato, riavvia la pagina e riprova');
        return error;

    } else if (inputNum > 5 || inputNum <= 0) {

        let error = alert('Valore inserito errato, riavvia la pagina e riprova');
        return error;

    } else {

        //Pescata Random e somma dei valori
        let numSorted = Math.floor((Math.random() * 5) + 1);
        let numSorted2 = Number(numSorted);
        console.log(numSorted2);
        let somma = inputNum + numSorted2;
        console.log(somma);

        //Verifica se l'utente ha vinto
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
}

computerRandom(numUtente2, paOdiUpper);