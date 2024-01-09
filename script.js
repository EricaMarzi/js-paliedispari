/*
    BONUS
    Se ne avete tempo e voglia, provate a:
    raccogliere le informazioni dall'utente usando form, input, button in pagina invece che coi prompt.
    Stampare i risultati in pagina, invece che in console
*/
   
//!Es 1 Palidroma ------------------------------------------------------------------------------
   
//Chiedere all’utente di inserire una parola (con un prompt)
const word = prompt("Inserire una parola", "osso").trim()
   
//Creare una funzione per capire se la parola inserita è palindroma
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
console.log("Parola inserita:", result)
    
//Stampiamo il risultato in console
if (result === word){
    console.log(word, "e", result, "sono palindromi")
} else {
    console.log(word, "e", result, "non sono palindromi")
}

console.log("_______________________")

//!Es 2 Pari e dispari --------------------------------------------------------------------------

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (con un prompt)
const userChoice = prompt("Pari o dispari?").trim().toLowerCase()

if (userChoice !== "pari" && userChoice !== "dispari") {
    alert("Parametri errati")
} else {
    console.log("L'utente ha scelto:", userChoice)
}

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRandomize (min, max) {
    return Math.floor(Math.random() * 5) + 1
}

const randomNumberUser = getRandomize()
const randomNumberPc = getRandomize()
console.log("Numero utente: ", randomNumberUser)
console.log("Numero comuputer: ", randomNumberPc)

//Sommiamo i due numeri
const sum = randomNumberUser + randomNumberPc

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function oddEven () {
    return sum % 2 === 0
}

const oddEvenResult = oddEven(sum)
console.log(oddEvenResult)

//Dichiariamo chi ha vinto in console.
if (userChoice === "pari" && oddEvenResult) {
    console.log("L'utente ha vinto", sum, "è pari")
} else if (userChoice === "dispari" && !oddEvenResult) {
    console.log("L'utente ha vinto", sum, "è dispari")
} else {
    console.log ("Ha vinto il pc")
}
