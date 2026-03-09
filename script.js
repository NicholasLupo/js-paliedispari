//Prompt Utente Momentaneo
let inPrompt = prompt('Inserisci la parola da esaminare');
let infoUtente = inPrompt.toString();
let infoUtenteNoSpace = infoUtente.replaceAll(' ', '');
let infoUtenteUpperNoSpace = infoUtenteNoSpace.toUpperCase();

//Funzione Palindromo
function toPalindrome(input) {

    let testArr = [];

    for (let i = 0; i < input.length; i++) {

        let typeUp = input[i];
        testArr.push(typeUp);
        console.log(typeUp);
        console.log(testArr);

        if (input.length == i + 1) {

            const rrAtset = testArr.toReversed();
            console.log(rrAtset);

            for (let t = 0; t < input.length; t++) {

                if (testArr[t] !== rrAtset[t]) {

                    const negativeOut = 'La parola non è palindroma';
                    console.log(negativeOut);
                    return negativeOut;

                } else if (testArr[t] === rrAtset[t] && input.length - 1 == t){

                    const positiveOut = 'La parola è palindroma';
                    console.log(positiveOut);
                    return positiveOut;

                }
            }
        }
    }
}

toPalindrome(infoUtenteUpperNoSpace)