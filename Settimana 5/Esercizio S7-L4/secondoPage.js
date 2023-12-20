
document.addEventListener('DOMContentLoaded', function () {
   
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

            window.location.href = "Starting-template.html";
            localStorage.clear();
        })
       }
        
    
});
