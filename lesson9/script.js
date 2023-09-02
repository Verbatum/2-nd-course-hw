const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");

buttonElement.addEventListener("click", () => {
    nameInputElement.classList.remove("error");
    if (nameInputElement.value === "") {
        nameInputElement.classList.add("error");
        return;
      }
    const oldListHtml = listElement.innerHTML;
    listElement.innerHTML =
      oldListHtml +
      `<li>
        ${nameInputElement.value}, любимый цвет <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span>
      </li>`;
      
      nameInputElement.value = "";
    });


/*     buttonElement.disabled = true;
    nameInputElement.disabled = true; */

/* // Выводит в консоль HTML-содержимое элемента списка
console.log(listElement.innerHTML);

// Заменяет содержимое элемента списка на новое, браузер перерисует этот блок
listElement.innerHTML = '<p> Меня добавили через JavaScript </p>'

buttonElement.addEventListener("click", () => {
    alert("Меня нажали");
});

const butEl = document.getElementById('add-push');

butEl.addEventListener("click", () => {
    alert("Не стоило сюда нажимать");
}); */

/* const changeElement = document.getElementById("add-tekst");
const change = document.getElementById("add-push");


changeElement.addEventListener("click", () => {
    if (change.innerHTML ==  "Любимые цвета студентов") {
        change.innerHTML = "Самые любимые цвета студентов";
    } else {
        change.innerHTML = "Любимые цвета студентов";
    }
    });
 */