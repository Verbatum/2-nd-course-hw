import { postTodo, deleteTodo, getTodos } from "./api.js";
import { renderLogin } from "./renderLogin.js";
import { renderTasks } from "./renderTasks.js";

let tasks = [];



const fetchAndRenderTasks = () => {
  getTodos().then((responseData) => {
    tasks = responseData.todos;
    renderTasks({ tasks, fetchAndRenderTasks });
    return true;
  });
};

// fetchAndRenderTasks();

renderLogin({fetchAndRenderTasks});

/* "format": "prettier --write ./src/" */
//"lint:js": "eslint ./src/**/*.js"