//for the fun of it
//alert("Welcome");

//first we need to reference it/call it
//const addButton = document.getElementsByClassName("add"); use this if you want more than one element with the same classname
const addButton = document.querySelector(".add");
//const deletebutton = document.querySelectorAll(".delete");
//const completedTask = document.querySelectorAll(".completed");
const todos = document.querySelector(".todos");
const list = document.getElementsByClassName("alketa")[0];

console.log(addButton);

//event listeners, on click executes a method 
addButton.addEventListener("click", addTodo);

function addTodo(){
    //console.log("just anything");
    const elements = document.createElement("li"); // <li></li>
    const deleteElement = document.createElement("button"); // <button></button>
    const completedElement = document.createElement("button");
    deleteElement.innerText = "delete"; // <button>delete</button>
    completedElement.innerText = "completed";
    deleteElement.setAttribute("class", "delete"); //<button class="delete">delete</button>
    completedElement.setAttribute("id", "completating");
    //deleteElement.setAttribute("id", "deleting");
    //insert li element within our ul tag
    elements.innerText = todos.value;
    elements.prepend(deleteElement, completedElement); //assigning delete element to element
     //innerText puts the plain text between two tags 
    list.append(elements);  //assigning element to list 
}

function deleteTodo() { 

 }

