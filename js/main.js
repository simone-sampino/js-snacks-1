/* due numeri in successione con due prompt. il software stampa il maggiore */

const firstNumber = Number(prompt('Inserisci il primo numero'));
const secondNumber = Number(prompt('Inserisci il secondo numero'));


if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else {
    console.log(secondNumber);
}