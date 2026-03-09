//Prompt Utente Momentaneo
let inPrompt = prompt('Inserisci la parola da esaminare');
let infoUtente = inPrompt.toString();

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

            if (testArr === rrAtset) {

                const positiveOut = 'La parola è palindroma';
                console.log(positiveOut);
                return positiveOut;

            } else {

                const negativeOut = 'La parola non è palindroma';
                console.log(negativeOut);
                return negativeOut;

            }
        }
    }
}

toPalindrome(infoUtente);

// Test for per stampare le due parole in ordine crescente e descrescente

// for (let i = 0; i < infoUtente.length; i++) {

//     let typeUp = infoUtente[i];
//     testArr.push(typeUp);
//     console.log(typeUp);
//     console.log(testArr);

//     // if (infoUtente.length == i + 1) {

//     //     let forTypeDown = infoUtente.length - 1;

//     //     for (let i = 0; i <= forTypeDown; forTypeDown--) {

//     //         let typeDown = infoUtente[forTypeDown];
//     //         console.log(typeDown);

//     //     }
//     // }
// }