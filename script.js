/*
    Palidroma
    Chiedere all’utente di inserire una parola (con un prompt)
    Creare una funzione per capire se la parola inserita è palindroma
    Stampiamo il risultato in console

    Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (con un prompt)
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto in console.

    Consigli del giorno
    1. Scriviamo sempre in italiano i passaggi che vogliamo fare
    2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

    BONUS
    Se ne avete tempo e voglia, provate a:
    raccogliere le informazioni dall'utente usando form, input, button in pagina invece che coi prompt.
    Stampare i risultati in pagina, invece che in console
*/

//!Es 1 Palidroma

const word = prompt("Inserire una parola").trim()

function getPalindrome() {
    let reverseWord = '';
    for (let i = word.length -1; i >= 0; i--) {
        reverseWord += word[i]
    }

    if (!word) {
        alert("Parametri errati")
    }
    
    return reverseWord
}

const result = getPalindrome()
console.log(result)

if (result === word){
    console.log(word, "e", result, "sono palindromi")
} else {
    console.log(word, "e", result, "non sono palindromi")
}

//!Es 2 Pari e dispari

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (con un prompt)
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto in console.
*/

const userChoice = prompt("Pari o dispari?").trim()

if (userChoice !== "Pari" && userChoice !== "Dispari" && userChoice !== "pari" && userChoice !== "dispari") {
    alert("Parametri errati")
} else {
    console.log(userChoice)
}






