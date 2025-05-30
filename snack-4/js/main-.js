/* crea un array vuoto. chiedi per 6 volte di inserire un numero. se è dispari, inseriscilo nell'array */

let number = [];
let repeat = 6;

for (let i = 0; i < repeat; i++) {
    numbers = Number(prompt('Inserisci un numero'));
    
    if(numbers % 2) {
        console.log(numbers);
    }
}