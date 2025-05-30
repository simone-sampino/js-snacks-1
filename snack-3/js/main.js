/* chiedi 10 volte di inserire un numero. stampa la somma di tutti i numeri inseriti */

let repeat = 10;
sum = null;

for (let i = 0; i < repeat; i++) {
    let number = Number(prompt('Inserisci un numero'));
    sum += number;

    console.log(sum);
}
