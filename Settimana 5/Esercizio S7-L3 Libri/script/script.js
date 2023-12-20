// Chiamate Ajax
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log('The operation is complete');
        let json = xhr.responseText;
        let books = JSON.parse(json);
        createList(books);
        addCart();
        scarta();
        
    }
}

let counter_cart = 0;
let priceCart = 0;

//localStorage.clear()


document.addEventListener('DOMContentLoaded', () => {
    counter_cart = localStorage.getItem('cartCounter') || 0;
    priceCart = parseFloat(localStorage.getItem('cartPrice')) || 0;

    updateCartCounter();
    updatePriceCart();


    let savedModalContent = localStorage.getItem('modalContent');
    if (savedModalContent) {
        document.querySelector('.modal-body').innerHTML = savedModalContent;
         
        btnModal();  
    }

});

function createList(books) {
    for (let i = 0; i < books.length ; i++) {
        let row = document.querySelector(".row");
        let col = document.createElement("div");
        col.classList.add("col");

        col.innerHTML = `
        <div class="card m-auto">
            <img src="${books[i].img}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
                <div class="h-75">   
                    <h5 class="card-title">${books[i].title}</h5>
                    <span class="badge rounded-pill text-bg-dark">${books[i].category}</span>
                </div>
                <div>
                    <p class="card-text">${books[i].price} <span>$</span></p>
                    <div class="d-flex justify-content-start f-start">
                        <button class="btn btn-danger p-1 me-2 add">Compra ora</button>
                        <button class="btn btn-outline-danger scarta">Scarta</button>
                    </div>
                </div>
            </div>
        </div> `

        row.appendChild(col);


    }
}

function addCart() {
    let compraBtn = document.querySelectorAll(".add");
    compraBtn.forEach(btn => {
        btn.addEventListener("click", function (e) {
            
            //console.dir(e.target.closest(".card").querySelector("h5").outerText);
            let img = e.target.closest(".card").querySelector("img").src;
            let title = e.target.closest(".card").querySelector("h5").outerText;
            let price = e.target.closest(".card").querySelector(".card-text");
            let priceNumeric = price.firstChild.textContent.trim();
        
            let modal = document.querySelector(".modal-body");
            let div = document.createElement("div");
            div.classList.add("elModal");
            div.classList.add("mb-2");
            div.innerHTML = `
                
                        <div class="img">
                            <img src="${img}" alt="">
                        </div>
                        <div class="libri-cart ms-auto">
                            <p>${title}</p>
                            <div class="d-flex">
                                <span class="fw-bold">${priceNumeric} $</span>
                                <button class="btn btn-danger p-1 me-2 ms-auto  elimina">Elimina</button>
                            </div>
                        </div>
                            `

            modal.appendChild(div);
            
            
        
            let eliminaBtn = div.querySelector(".elimina");
            eliminaBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                e.target.closest(".elModal").remove();
                counter_cart--;
                updateCartCounter();
                priceCart -= +priceNumeric;
                updatePriceCart();

                localStorage.setItem('cartCounter', counter_cart);
            localStorage.setItem('cartPrice', priceCart);
            localStorage.setItem('modalContent', document.querySelector('.modal-body').innerHTML);
            });

            priceCart += +priceNumeric;
            updatePriceCart();
            counter_cart++;
            updateCartCounter();

            localStorage.setItem('cartCounter', counter_cart);
            localStorage.setItem('cartPrice', priceCart);

            localStorage.setItem('modalContent', document.querySelector('.modal-body').innerHTML);
        })
    })
}


function scarta() {

    let scartaButtons = document.querySelectorAll(".scarta");
    scartaButtons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.target.closest(".col").remove();
        })
    });
}


function updateCartCounter() {
    let num = document.querySelector(".notes");
    num.textContent = counter_cart;
}

function updatePriceCart(){
    let price = document.querySelector(".priceCart");
    price.textContent = "Totale : " + parseFloat(priceCart).toFixed(2) + "$";
}

function btnModal(){
    let eliminaBtn = document.querySelectorAll(".elimina");
        eliminaBtn.forEach(btn =>{
            btn.addEventListener("click", function (e) {
                e.target.closest(".elModal").remove();
                counter_cart--;
                updateCartCounter();
                localStorage.setItem('cartCounter', counter_cart);

                localStorage.setItem('modalContent', document.querySelector('.modal-body').innerHTML);
        })
            
                
     });
}