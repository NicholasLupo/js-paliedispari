//Prompt Utente Momentaneo
let inPrompt = prompt('Inserisci la parola da esaminare');
let infoUtente = inPrompt.toString();

//Funzione Palindromo
// function toPalindrome(input) {

//     for (let i = 0; i <= input.length; i++) {

//         let typeUp = input[i];

//         if (input.length === typeUp) {

//             let forTypeDown = typeUp;
//             console.log(forTypeDown);

//             for (let i = 0; i >= forTypeDown; forTypeDown--) {

//                 let typeDown = input[forTypeDown];
//                 console.log(typeDown);

//             }
//         }
//     }
// }

// toPalindrome();

// if (input == NaN) {

//         const positiveOut = 'La parola è palindroma';
//         console.log(positiveOut);

//     } else {

//         const negativeOut = 'La parola non è palindroma';
//         console.log(negativeOut);

// }


// Test for per stampare le due parole in ordine crescente e descrescente
for (let i = 0; i < infoUtente.length; i++) {

    let typeUp = infoUtente[i];
    console.log(typeUp);

    if (infoUtente.length == i + 1) {

        let forTypeDown = infoUtente.length - 1;

        for (let i = 0; i <= forTypeDown; forTypeDown--) {

            let typeDown = infoUtente[forTypeDown];
            console.log(typeDown);

        }
    }
}