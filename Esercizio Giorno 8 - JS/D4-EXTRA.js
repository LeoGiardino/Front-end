// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){

    let arr = [];

    for(let i=0; i <= n; i++){
        arr.push(Math.floor(Math.random() * 11));
    }

    return arr;
}

function checkArray(x){

    let maggiore = 0;

    for(let i=0; i < x.length ; i++){
        if(x[i] > 5){
            console.log(x[i] + " maggiore di 5");
            maggiore = maggiore + x[i];
        }else if(x[i] === 5){
            console.log(x[i] + " uguale a 5");
        }else{
            console.log(x[i] + " minore di 5");
        }
    }

    return "La somma tra i maggiori di 5 è: " + maggiore;
}

console.log(checkArray(giveMeRandom(5)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [
    {
        price: 10,
        name: "cappello",
        id: 2134,
        quantity: 20
    },
    {
        price: 24,
        name: "anello",
        id: 2134,
        quantity: 30
    },
    {
        price: 89,
        name: "scrpe",
        id: 2134,
        quantity: 10
    }
];


function shoppingCartTotal(){

    let totale = 0;
    for(let i=0; i < shoppingCart.length; i++){
        let x = shoppingCart[i].price * shoppingCart[i].quantity;
        totale = totale +x;
    }

    return totale;
}

console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(x){

    shoppingCart.push(x);

    return "Elementi totali: " + shoppingCart.length;
}

let newProduct = {price: 35, name: "sciarpa", id: 1255, quantity: 90}

console.log(addToShoppingCart(newProduct));


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(x){

    let prezzoMaggiore = 0;
    let oggCostoso;

    for(let i=0; i < shoppingCart.length; i++){
        if(shoppingCart[i].price > prezzoMaggiore){
            prezzoMaggiore = shoppingCart[i].price;
        }

        for(let y=0; y < shoppingCart.length; y++){
            if(shoppingCart[y].price === prezzoMaggiore){
                oggCostoso = shoppingCart[y].name;
            }
        }
    }

    return "L'oggetto più costoso nel carrello: " + oggCostoso + " con un prezzo di " + prezzoMaggiore;
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(x){

    return x[x.length-1];
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

function loopUntil(x){
    if(x < 0 || x > 9){
        return null;
    }

    let cont = 0;


    while(cont <= 2){
        let casuale = Math.floor(Math.random() * 10); 
        console.log(casuale);

        if(casuale > x){
            cont++;
        }else{
            cont = 0;
        }  
    
    }
}

loopUntil(4);

*/

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(x){

    let media = 0;
    let cont = 0;

    for(let i=0; i < x.length; i++){
        if(typeof x[i] === "number"){
            media = media + x[i];
            cont++;
        }
    }

    return (media / cont);

}

let arr = [20, 10, "ciao", 33, 22];
console.log(average(arr));


/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arr2 = ["gatto", "serpente", "cavallo", "leone"];

function longest(x){

    let lunga = "";

    for(let i=0; i < x.length; i++){

        if(x[i].length > lunga.length){
            lunga = x[i];
        }
    }

    return "La parola più lunga è: " + lunga;
}

console.log(longest(arr2));


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtro(emailContent){

    let paroleProibite = ["spam", "scam"];

    let valore;

    for(let i=0; i < paroleProibite.length; i++){

        if(emailContent.includes(paroleProibite[i])){
            valore = false;
            break;
        }else{
            valore = true;
        }
    }

    return valore;
}

let messaggio = "Questa   email non ";

console.log(filtro(messaggio));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
