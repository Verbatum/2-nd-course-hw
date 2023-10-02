import { addTodo, deleteTodo, getTodos } from "./api.js";
import { formatDateToRu, formatDateToUs } from "./lib/formatDate/formatDate.js"
import { renderLogin } from "./renderLogin.js";
import { renderTasks } from "./renderTasks.js";

let tasks = [];

const country = "ru";
const tasksHtml = tasks
    .map((task) => {
      return `
          <li class="task">
            <p class="task-text">
              ${task.text} (Создал: ${task.user?.name ?? "Неизвестно"})
              <button data-id="${
                task.id
              }" class="button delete-button">Удалить</button>
            </p>
            <p><i>Задача создана: ${country === "ru" ? formatDateToRu(new Date(task.created_at)) : formatDateToUs(new Date(task.created_at))}</i></p>
          </li>`;
    })
    .join("");

const fetchAndRenderTasks = () => {
  getTodos().then((responseData) => {
    tasks = responseData.todos;
    renderTasks({ tasks, fetchAndRenderTasks });
    return true;
  });
};

// fetchAndRenderTasks();

renderLogin({fetchAndRenderTasks});