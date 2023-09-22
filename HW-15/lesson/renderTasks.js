import { deleteTodo } from "./API.js";

const listElement = document.getElementById("list");

export const renderTasks = ({ tasks, fetchAndRenderTasks }) => {
    const tasksHtml = tasks
      .map((tasks) => {
        return `
        <li class="task">
          <p class="task-text">
            ${tasks.text}
            <button data-id="${tasks.id}" class="button delete-button">Удалить</button>
          </p>
        </li>`;
      })
      .join("");
  
    listElement.innerHTML = tasksHtml;
    const deleteButtons = document.querySelectorAll(".delete-button");
  
    for (const deleteButton of deleteButtons) {
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
  
        const id = deleteButton.dataset.id;
  
        deleteTodo({ id }).then(() => {
            fetchAndRenderTasks();
          });
      });
    }
  };