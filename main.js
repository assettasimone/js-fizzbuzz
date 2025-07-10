/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */
let message;
/* facciamo un cliclo for per scorrere e stampare i numeri da 1 a 100 */
for (let i = 1; i <= 100; i++) {
    /* ad ogni iterazione del ciclo mi resetto il messaggio */
    message = '';
    /* controlliamo tramite un if se il numero è divisibile per 3 */
    if (i % 3 == 0) {
        message = message + 'Fizz';
    } else if (i % 5 == 0) {
        message = message + 'Buzz';
    } else {
        message = i;
    }
    console.log(message);
}

