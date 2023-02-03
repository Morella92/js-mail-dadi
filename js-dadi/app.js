console.log('dadi')

const container = document.getElementById('container')

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let randomNumberUser = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberUser)

let randomNumberPc = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberPc)

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let message

if(randomNumberUser > randomNumberPc){

    message = 'Complimenti! Hai vinto!'

}else if(randomNumberUser === randomNumberPc){

    message = 'Pareggio!'

}else {

    message = 'Mi dispiace, hai perso. Riprova!'

}

container.innerHTML = message

