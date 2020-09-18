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

    console.log("is this working?");
}
