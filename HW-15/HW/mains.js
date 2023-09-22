const list = document.getElementById("comments-list");
const form = document.getElementById("form");
const nameInput = document.getElementById("name-input");
const textarea = document.getElementById("textarea-input");
let addButton = document.getElementById("add-button");
const delButton = document.getElementById("delete-button");
const item = document.getElementById("comment");

let comments = [];

const fetchAndRenderComments = () => {
  return fetch("https://wedev-api.sky.pro/api/v1/aleksey-kuzmenchuk/comments", {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 500) {
        throw new Error("Server's problem");
      } else {
        return response.json();
      }
    })
    .then((response) => {
      comments = response.comments.map((comment) => {
        const commentDate = new Date(comment.date);
        let day = commentDate.getDate();
        let month = commentDate.getMonth() + 1;
        let year = commentDate.getFullYear();
        let hour = commentDate.getHours();
        let minutes = commentDate.getMinutes();
        if (day < 10) {
          day = "0" + day;
        }
        if (month < 10) {
          month = "0" + month;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        const stringDate = `${day}.${month}.${year} ${hour}:${minutes}`;
        return {
          author: comment.author.name,
          date: stringDate,
          comment: comment.text,
          likes: comment.likes,
          isLiked: comment.isLiked,
        };
      });
      renderComments();
    })
    .catch((err) => {
      if (err.message === "Server's problem") {
        alert("Проблемы с сервером. Попробуйте снова");
      } else {
        alert("Какие-то проблемы с сетью. Попробуйте позже");
      }
    });
};

const renderComments = () => {
  const commentsHTML = comments
    .map((comment, index) => {
      return `
        <li class="comment" data-item=${index}>
          <div class="comment-header">
            <div>${comment.author}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.comment}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button class="like-button ${
                comment.isLiked ? "-active-like" : ""
              }" data-index="${index}"></button>
            </div>
          </div>
        </li>
        `;
    })
    .join("");
  list.innerHTML = commentsHTML;
  addButton.disabled = true;
  const commentsElements = document.querySelectorAll(".comment");
  for (const editComment of commentsElements) {
    editComment.addEventListener("click", (event) => {
      const i = editComment.dataset.item;
      textarea.value = `
      >${comments[i].comment}
      ${comments[i].author}
      `;
    });
  }
  initLikesListeners();
};
const addItem = () => {
  const newDate = new Date();
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let hour = newDate.getHours();
  let minutes = newDate.getMinutes();
  nameInput.classList.remove("error");
  textarea.classList.remove("error");
  if (textarea.value === "" && nameInput.value === "") {
    nameInput.classList.add("error");
    textarea.classList.add("error");
    return;
  } else if (textarea.value === "") {
    textarea.classList.add("error");
    return;
  } else if (nameInput.value === "") {
    nameInput.classList.add("error");
    return;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  form.style.display = "none";
  const addMessage = document.createElement("div");
  addMessage.textContent =
    "Погодите секундочку, комментарий загружается...";
  addMessage.classList.add("add-message");
  form.before(addMessage);

  fetch("https://wedev-api.sky.pro/api/v1/aleksey-kuzmenchuk/comments", {
    method: "POST",
    body: JSON.stringify({
      text: textarea.value,
      name: nameInput.value,
    }),
  })
    .then((response) => {
      console.log(response);
      if (textarea.value.length <= 2 || nameInput.value.length <= 2) {
        throw new Error("Too little symbols");
      } else if (response.status === 500) {
        throw new Error("Server's problem");
      } else {
        return response.json();
      }
    })
    .then(() => {
      return fetchAndRenderComments();
    })
    .then((response) => {
      nameInput.value = "";
      textarea.value = "";

      addButton.disabled = true;
    })
    .catch((err) => {
      if (err.message === "Too little symbols") {
        alert("Введите более 2 символов");
      } else if (err.message === "Server's problem") {
        alert("Проблемы с сервером. Попробуйте снова");
      } else {
        alert("Какие-то проблемы с сетью. Попробуйте позже");
      }

      addButton.disabled = false;
    });

  form.style.display = "flex";
  addMessage.remove();

  comments.push({
    author: `${nameInput.value
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("&", "&amp;")}`,
    date: `${day}.${month}.${year} ${hour}:${minutes}`,
    comment: `${textarea.value
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("&", "&amp;")}`,
    likes: 0,
    isLiked: false,
  });

  renderComments();
};

const delLast = () => {
  const list = document.getElementById("comments-list");
  list.innerHTML = list.innerHTML.replace(
    list.innerHTML.slice(list.innerHTML.lastIndexOf(`<li >`)),
    ""
  );
  comments.pop();
  initLikesListeners();
  renderComments();
};
form.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    addItem();
  }
});
addButton.disabled = true;
nameInput.addEventListener("input", (event) => {
  textarea.addEventListener("input", (e) => {
    if (event.target.value.length > 0 && e.target.value.length > 0) {
      addButton.disabled = false;
    } else if (
      event.target.value.length > 0 &&
      e.target.value.length === 0
    ) {
      addButton.disabled = true;
    } else if (
      event.target.value.length === 0 &&
      e.target.value.length > 0
    ) {
      addButton.disabled = true;
    } else if (
      event.target.value.length === 0 &&
      e.target.value.length === 0
    ) {
      addButton.disabled = true;
    }
  });
});
textarea.addEventListener("input", (event) => {
  nameInput.addEventListener("input", (e) => {
    if (event.target.value.length > 0 && e.target.value.length > 0) {
      addButton.disabled = false;
    } else if (
      event.target.value.length > 0 &&
      e.target.value.length === 0
    ) {
      addButton.disabled = true;
    } else if (
      event.target.value.length === 0 &&
      e.target.value.length > 0
    ) {
      addButton.disabled = true;
    } else if (
      event.target.value.length === 0 &&
      e.target.value.length === 0
    ) {
      addButton.disabled = true;
    }
  });
});
const initLikesListeners = () => {
  const likesBtns = document.querySelectorAll(".like-button");
  const likes = document.querySelectorAll(".likes");
  for (let likeBtn of likesBtns) {
    likeBtn.addEventListener("click", (event) => {
      const i = likeBtn.dataset.index;
      if (!comments[i].isLiked) {
        comments[i].isLiked = true;
        comments[i].likes = comments[i].likes + 1;
      } else {
        comments[i].isLiked = false;
        comments[i].likes = comments[i].likes - 1;
      }
      event.stopPropagation();
      renderComments();
    });
  }
};
fetchAndRenderComments();
addButton.addEventListener("click", () => addItem());
delButton.addEventListener("click", () => delLast());
list.innerHTML = "<li>Комментарии загружаются...</li>";