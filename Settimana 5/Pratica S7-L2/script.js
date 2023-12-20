let input = document.querySelector("input");
let btn = document.querySelector("div > button:first-child");
let btn2 = document.querySelector(".elimina");
let stampa = document.querySelector(".stampa");
let tempo = document.querySelector(".tempo");

let count = 0;
let arr = [];
//localStorage.clear();

for (let i = 1; i <= count; i++) {
    let key = "id" + i;
    let value = localStorage.getItem(key);
    if (value) {
        arr.push({ key, value });
    }
}

btn.addEventListener("click", () => {
    if (input.value) {
        count++;
        let key = "id" + count;
        let value = input.value;


        localStorage.setItem(key, value);
        console.log(localStorage.length);
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            console.log('Chiave:', key, 'Valore:', value);
        }

        arr.push({ key, value });

        //console.log(arr);

        let p = document.createElement("p");
        p.innerHTML = `${key} + ${value} `;
        stampa.appendChild(p);
    }


    

    
});


btn2.addEventListener("click", function(){

    if(localStorage.length == 0){
        stampa.innerHTML = `Non puoi eliminare nulla`;
        console.log(localStorage.length);
    }else {
        localStorage.removeItem("id"+count);
        stampa.innerHTML = "Eliminato";
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            console.log('Chiave:', key, 'Valore:', value);
        }
    }

})



if (!sessionStorage.getItem("timer")) {
    sessionStorage.setItem("timer", 0);
}

function timer() {

    let value = parseInt(sessionStorage.getItem("timer"));

    value++;

   
    sessionStorage.setItem("timer", value);

    tempo.innerHTML = `Secondi trascorsi = ${value}`;
}


setInterval(timer, 1000);

