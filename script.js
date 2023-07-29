const todoInput = document.querySelector(".textArea");
const addButton = document.querySelector(".addButton");
const todoList = document.querySelector(".todoList");
const div = document.querySelector(".todo");


addButton.addEventListener("click", addtodo);

function addtodo(e){

    e.preventDefault();

    if(todoInput.value === ""){
        alert("Text area shouldn't be empty!!")
    }

    else{
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");

    const completedButton = document.createElement("i");
    completedButton.classList.add("fa-solid", "fa-check", "doneButton");
    tododiv.appendChild(completedButton);

    const newtodo = document.createElement("li");
    newtodo.innerText= todoInput.value;
    newtodo.classList.add("todoitem"); 
    tododiv.appendChild(newtodo);

    const trashButton = document.createElement("i");
    trashButton.classList.add("fa-solid", "fa-trash-can", "deleteButton");
    tododiv.appendChild(trashButton);

    todoList.appendChild(tododiv);

    todoInput.value= "";


    trashButton.addEventListener("click", function() {
        tododiv.remove();
      });

    completedButton.addEventListener("click", function() {
        tododiv.style.opacity = "0.6";
        newtodo.style.textDecoration = "line-through";
      });

    }
}   