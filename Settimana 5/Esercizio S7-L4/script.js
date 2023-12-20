

let query = "#";
let data;

function daje() {
    let url = `https://api.pexels.com/v1/search?query=${query}`;

    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'uxzUPPzGpMUuBpfVzIJWGrf4sn4TFf5osQm3sGwwmgfSfFtWkyv9MkOl' 
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json.photos[0]);
            data = json;
            loadImg(json);
            console.log(data);

        })
        .catch(error => console.log(error));
}


function loadImg(obj) {
    let imgs2 = document.querySelectorAll(".card-img-top");
    const mins = document.querySelectorAll(".text-muted");
    for (let i = 0; i < imgs2.length; i++) {
        imgs2[i].src = obj.photos[i].src.original;
        mins[i].textContent = obj.photos[i].id;
    }

}


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
        query = 'dog';
        daje();
    } else if (event.target.classList.contains('btn-secondary')) {
        query = 'cat';
        daje();
  
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector(".form-control");
    const search = document.querySelector(".search");

    search.addEventListener("click", function () {
        query = input.value;
        daje();
    });

    const imgs = document.querySelectorAll(".card-img-top");
    imgs.forEach((img, index) => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            
            let nome = data.photos[index].photographer;
            localStorage.setItem('nome', nome);
            let srcc = data.photos[index].src.original;
            localStorage.setItem('srcc', srcc);
            let sito = data.photos[index].photographer_url;
            localStorage.setItem('sito', sito);
            
            window.location.href = "secondoPage.html";
            
        });
    });
});



