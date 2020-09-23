// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(event) {
    //prevents the form from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //creating the li list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); 
    //add todo  to localstorage
    saveLocalTodos(todoInput.value); 
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class ="fas fa-check"></i>'; //adding this i-tag inside
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton); //appeding the button to the div, again as in above
      //check track button
    const trashdButton = document.createElement('button');
    trashdButton.innerHTML = '<i class ="fas fa-trash"></i>'; //adding this i-tag inside
    trashdButton.classList.add("trash-btn");
    todoDiv.appendChild(trashdButton); //appeding the button to the div, again as in above
      //now in the end, attach it to the ul in the html file (index)
      //so append to list
    todoList.appendChild(todoDiv);    
    //clear to do input value
    todoInput.value = "";
}

   function deleteCheck(e) {
     const item = e.target;
      //deleting todo
      if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
          todo.remove();
        });
      }

       //check mark
       if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
       }
    }

    function filterTodo(e) {
      const todos = todoList.childNodes;
      todos.forEach(function(todo) {
        switch (e.target.value) {
          case "all":
            todo.style.display = "flex";
            break;
          case "completed":
            if (todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
          case "uncompleted":
            if (!todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
        }
      });
    }

    function saveLocalTodos(todo) {
      //checking if there is something in local storage already
      let todos;
      if(localStorage.getItem('todos') === null) { //if we have the array -->
        todos = [];
        } else {
          todos = JSON.parse(localStorage.getItem('todos')); //parse it back into an array
      }
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos)); //saving it
    }

    function getTodos() {
      let todos;
      if(localStorage.getItem('todos') === null) { //if we have the array -->
        todos = [];
        } else {
          todos = JSON.parse(localStorage.getItem('todos')); //parse it back into an array
      }
      todos.forEach(function(todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //creating the li list
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
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
        trashdButton.classList.add("trash-btn");
        todoDiv.appendChild(trashdButton); //appeding the button to the div, again as in above
          //now in the end, attach it to the ul in the html file (index)
          //so append to list
        todoList.appendChild(todoDiv); 
      });
      }

      function removeLocalTodos(todo) {
        let todos;
        if(localStorage.getItem('todos') === null) { //if we have the array -->
          todos = [];
          } else {
            todos = JSON.parse(localStorage.getItem('todos')); //parse it back into an array
        }
        //remove the position of the element we are clicking on
        
        }
  