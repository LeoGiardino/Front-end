document.addEventListener('DOMContentLoaded', function () {
    // Recupera i dati dalla sessionStorage
    const nome = localStorage.getItem('nome');
    const srcc = localStorage.getItem('srcc');
    const sito = localStorage.getItem('sito');

    home();
        const div = document.createElement("div");

        let divo = document.querySelector(".containers");

        div.innerHTML = `
            <h3 class="">${nome}</h3>
            <img src="${srcc}" alt="" width="200">
            <a href="${sito}">Sito del fotografo</a>

        `;

        divo.appendChild(div);



       function home (){
        const btn = document.querySelector("button");
        btn.addEventListener("click", function(){
            console.log("we");
            window.location.href = "Starting-template.html";
            localStorage.clear();
        })
       }
        
    
});
