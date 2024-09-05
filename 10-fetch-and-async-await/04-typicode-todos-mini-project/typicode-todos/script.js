const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getToDos = () => {
  fetch(apiUrl + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addToDoToDOM(todo));
    });
};

const addToDoToDOM = (todo) => {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  if (todo.completed) {
    div.classList.add("done");
  }

  document.getElementById("todo-list").appendChild(div);
};

const createToDo = (e) => {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false
  }

  // Making a request and sending to the server
  fetch (apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => addToDoToDOM(data))
};


const init = () => {
  document.addEventListener('DOMContentLoaded', getToDos );
  document.querySelector('#todo-form').addEventListener('submit', createToDo )
};
init();