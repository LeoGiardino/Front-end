// Tutto il tuo codice JavaScript qui
let tabella = document.querySelector("ul");
let button = document.querySelector("button");
let arry = [];

creaTabella();
btn();


function creaTabella() {
    for (let i = 1; i <= 76; i++) {
        let li = document.createElement("li");
        li.innerText = [i];
        tabella.appendChild(li);
    }
}


function btn() {
    let arr = [];

    let lista = document.querySelectorAll("ul > li");

    button.addEventListener("click", () => {
        let p = document.querySelector(".tabella > p")
        let casuale;

        // Genera un numero casuale che non sia già presente nell'array
        do {
            casuale = Math.round(Math.random() * 76) + 1;
        } while (arr.includes(casuale));

        p.textContent = casuale;
        arr.push(casuale);
        lista[casuale - 1].className = "estratto";

    
    });
}


function giocatore(){

    let tabella = document.createElement("ul");
    let casella = document.querySelector(".giocatore");
    casella.appendChild(tabella);

    for (let i = 1; i <= 24; i++) {
        let li = document.createElement("li");
        let casuale = Math.round(Math.random() * 76) + 1;
        li.innerText = casuale;
        arry.push(casuale);
        tabella.appendChild(li);
    }
}

giocatore();