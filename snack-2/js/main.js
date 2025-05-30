/* due parole in successione con due prompt. il software stampa prima la più lunga e poi la più corta */

const firstWord = prompt('inserisci una parola');
const secondWord = prompt("inserisci un'altra parola");

if (firstWord.length > secondWord.length) {
    console.log(firstWord + ', ' + secondWord);
} else if (firstWord.length < secondWord.length) {
    console.log(secondWord + ', ' + firstWord);
} else {
    console.log(firstWord + ', ' + secondWord);
}