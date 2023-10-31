/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 20;
let num2 = 51;

if(num1 > num2){
  console.log("Il numero più grande è: " + num1)
}else{
  console.log("Il numero più grande è: " + num2)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let num = prompt('Inserisci un numero (5)');

if(num != 5) {
    console.log("Not equal");
}else{
  console.log("Corretto");
}

*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = 10;

if(num % 5 == 0){
  console.log(num + " è divisibile per 5");
}else{
  console.log(num + " non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let int1 = 12;
let int2 = 8;

if(int1 == 8 || int2 == 8){
  console.log("Uno dei due valori è uguale a  8");
} else if(int1 + int2 == 8 || int1 - int2 == 8){
  console.log("La loro addizione/sottrazione è uguale a 8");
}else {
  console.log("Nessuna di queste è corretta");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 39;

if(totalShoppingCart >= 50){
  console.log("Spedizion gratuita, totale checkout: " + totalShoppingCart  + "$");
}else{
  console.log("Totale checkout: " + (totalShoppingCart+10) + "$");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let promoBF = 0.2;
let totalShoppingCart2 = 50;

if((totalShoppingCart2 -= totalShoppingCart2*promoBF) >= 50){
  console.log("Spedizion gratuita, totale checkout: " + totalShoppingCart2  + "$");
}else{
  console.log("Totale checkout: " + (totalShoppingCart2+10) + "$");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 310;
let n2 = 5533;
let n3 = 700;

if(n1 >= n2 && n1 >= n3){
  if(n2 >= n3){
    console.log(n1 + ", " + n2 + ", " + n3)
  }else{
    console.log(n1 + ", " + n3 + ", " + n2)
  }
}else if(n2 >= n1 && n2 >= n3){
  if(n1 >= n3){
    console.log(n2 + ", " + n1 + ", " + n3)
  }else{
    console.log(n2 + ", " + n3 + ", " + n1)
  }
}else{
  if(n3 >= n1 && n3 >= n2){
    console.log(n3 + ", " + n1 + ", " + n2)
  }else{
    onsole.log(n3 + ", " + n2 + ", " + n1)
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 5;

if(typeof x == "string"){
  console.log("Il valore è una stringa");
}else if(typeof x == "number"){
  console.log("Il valore è un numero");
}else{
  console.log("Il valore non è un numero o una stringa")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n4 = 44;

if(n4 % 2 == 0){
  console.log("Il numero " + n4 + " è pari");
}else{
  console.log("Il numero " + n4 + " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.


  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  let val = 4;
  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arr = [];

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

console.log(arr);



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arr[9] = 100;

console.log(arr);


