//Prompt Utente Momentaneo
let infoUtente = 312;

//Array da verificare con la funzione reverse()
const toCheck = [];
toCheck.unshift(infoUtente);
console.log(toCheck);


//Funzione Palindromo
function toPalindrome (input) {

    if (input == input.reverse()) {

        const positiveOut = 'La parola è palindroma';
        console.log(positiveOut);

    } else {

        const negativeOut = 'La parola non è palindroma';
        console.log(negativeOut);

    }
}

toPalindrome(toCheck)
console.log(toCheck); // Ho scoperto che la funzione reverse non è adatto per verificare 
                      // se la parola è palindroma dato che inverte tutto l'array e non il singolo valore :(