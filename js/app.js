console.log('inizio')

const container= document.getElementById('container')
console.log(container)
// Mail
// Crea un array con una lista di email (stringhe)
const emailAddress = ['morena.p@ciao.it', 'rossi_mario@libero.com', 'dav.verde@outlook.com', 'cielo_blue@hotmail.it']
console.log(emailAddress)

// Chiedi all’utente la sua email (con il prompt), 
let userEmail = prompt ('Inserisci il tuo indirizzo email.')
console.log(userEmail)

container.innerHTML= userEmail

//controlla che sia nella lista di email

for (let i = 0; i < emailAddress.length; i++) {
    
    let browserEmail = emailAddress [i]

    if (userEmail === browserEmail) {
        console.log('La tua email è presente nel sistema.')
    } else {
        console.log('Mi dispiace, la tua email non è presente in questo sistema.')
    }
}
// stampa un messaggio appropriato sull’esito del controllo.