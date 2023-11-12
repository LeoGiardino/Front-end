
let arr = [];
let pendings = document.querySelector(".pendingTasks");

addTask();
taskComplete();
deleteTask();
clearAll();
pending();





function addTask(){

  let btn = document.querySelector(".inputField button");
  let input = document.querySelector(".inputField input");
  let lista = document.querySelector(".todoList");
  

  btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML = `<span>${input.value} </span><button class="delete"><i class="fa-solid fa-trash"></i></button>`;
    if(input.value.length > 2){
      lista.appendChild(li);

      arr.push(li)
      console.log(arr.length);
      pendings.innerText = arr.length;
      console.log(arr);

        let spans = li.querySelector("span");
        spans.addEventListener("click", ()=> {
          spans.classList.toggle("barra");
        })

        let delBtn = li.querySelector(".delete");
        delBtn.addEventListener("click", ()=>{
          delBtn.parentNode.remove();
          arr.pop();
          console.log("elimino 1 " + arr.length);
          pendings.innerText = arr.length;
        })

      input.value = "";
      
    }
  })
}

function taskComplete(){
  let spans = document.querySelectorAll(".todoList li > span");
  spans.forEach(span => {
    span.addEventListener("click", ()=> {
      span.classList.toggle("barra");
    })
  })
} 

function deleteTask() {
  let delBtns = document.querySelectorAll(".delete");

  delBtns.forEach(delBtn => {
    delBtn.addEventListener("click", () => {
      delBtn.parentNode.remove();
      arr.pop(); 
      pendings.innerText = arr.length;

    });
  });
}

function clearAll(){

  let btn = document.querySelector(".clear");
  btn.addEventListener("click", ()=>{
    let ul = document.querySelector(".todoList");
    ul.innerHTML = "";
    arr.length = 0;
    pendings.innerText = arr.length;

  })

}

function pending(){

  let li = document.querySelectorAll("li");

  li.forEach(val =>{
    arr.push(val)
  })
  pendings.innerText = arr.length;

}

