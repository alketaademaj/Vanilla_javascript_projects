// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addTodo);


// Functions
function addTodo(event) {
    //prevents the form from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //creating the li list
    const newTodo = document.createElement("li");
    newTodo.innerText = "test";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); 
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class ="fas fa-check"></i>'; //adding this i-tag inside
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton); //appeding the button to the div, again as in above
      //check track button
    const trashdButton = document.createElement('button');
    trashdButton.innerHTML = '<i class ="fas fa-trash"></i>'; //adding this i-tag inside
    trashdButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton); //appeding the button to the div, again as in above
      //now in the end, attach it to the ul in the html file (index)
      //so append to list
    todoList.appendChild(todoDiv);    


    console.log("is this working?");
}
