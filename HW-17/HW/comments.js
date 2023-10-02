import { format } from "date-fns";
import { delay } from "./service-functions.js";
import { getComments } from "./API.js";
let comments = [];

function getAndRenderComments(token) {
  getComments(token)
    .then((responseData) => {
      comments = responseData.comments;
      console.log(comments);
      renderComments(0, token);
    })
    .catch((error) => {
      console.warn(error);
      switch (error.message) {
        case "Server is broken":
          alert("Сервер сломался, попробуй позже");
          break;

        case "Failed to fetch":
          alert("Кажется, у вас сломался интернет, попробуйте позже");
      }
    });
}

//Отрисовать, при true аргументе рисует заглушку
function renderComments(isFirstOpen = 0, token) {
  const commentsList = document.querySelector("ul.comments");
  const formattedDate = format(new Date(), "yyyy/MM/dd hh:mm:ss");
  if (isFirstOpen) {
    commentsList.innerHTML = `
    <li class="comment" style="display: flex;">
    Комментарии загружаются... 

    <svg class="spinner" viewBox="0 0 50 50">
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
    </li>`;
  } else {
    commentsList.innerHTML = comments.reduce((result, comment, index) => {
      return (
        result +
        `
    <li class="comment" data-id="${comment.id}" data-index="${index}">
    <div class="comment-header">
    <div>${comment.author.name}
    </div>
    <div>${formattedDate}</div>
    </div >
    <div class="comment-body">
    <div class="comment-text">   
        ${makeQuote(comment.text)}            
    </div>
    </div>
    <div class="comment-footer">
    <button class="delete-button">Удалить</button>

    <div class="likes">
        <span class="likes-counter">${comment.likes}</span>
        <button class="${
          comment.isLiked ? "like-button -active-like" : "like-button"
        }"></button>
    </div>
    </div>
    </li >`
      );
    }, "");

    addCommentListener(token);
  }
}

function addCommentListener(token) {
  const currentComments = document.querySelectorAll("li.comment");

  for (const comment of currentComments) {
    comment.addEventListener("click", (e) => {
      const index = comment.dataset.index;
      const currentToken = token;
      const likeButton = e.currentTarget.querySelector("button.like-button");
      const deleteButton = e.currentTarget.querySelector(".delete-button");

      if (e.target === likeButton) {
        like(index, currentToken);
        return;
      }
      if (e.target === deleteButton) {
        deleteComment(index, currentToken);
        return;
      }

      replyComment(index);
    });
  }
}

//Ответ на комментарий в виде цитаты
function replyComment(index) {
  const inputComment = document.querySelector(".add-form-text");
  inputComment.value =
    "⟪" +
    comments[index].author.name +
    ":" +
    "\n" +
    comments[index].text +
    " ©" +
    "⟫";
  renderComments();
}

function makeQuote(str) {
  return str
    .replaceAll("⟪", '<blockquote class="blockquote">')
    .replaceAll("⟫", "</blockquote>");
}

function deleteComment(index, currentToken) {
  fetch(
    "https://webdev-hw-api.vercel.app/api/v2/aleksey-kuzmenchuk/comments/" +
      comments[index].id,
    {
      method: "DELETE",
      headers: {
        authorization: currentToken,
      },
    }
  )
    .then((response) => {
      if (response.status === 200) {
        comments.splice(index, 1);
        renderComments(0, currentToken);
        // return response.json();
      }
    })
    .catch((error) => {
      console.warn(error);
      if ((error.message = "Failed to fetch")) {
        alert("Нет соединения с интернетом");
      }
    });
}

function like(index, currentToken) {
  const currentLikeButton = document.querySelectorAll(".like-button")[index];
  const commentId = comments[index].id;
  currentLikeButton.classList.add("loading-like");
  fetch(
    "https://webdev-hw-api.vercel.app/api/v2/aleksey-kuzmenchuk/comments/" +
      commentId +
      "/toggle-like",
    {
      method: "POST",
      headers: {
        authorization: currentToken,
      },
    }
  )
    .then((response) => {
      if (response.status === 200) {
        if (comments[index].isLiked) {
          comments[index].isLiked = false;
          comments[index].likes -= 1;
        } else {
          comments[index].isLiked = true;
          comments[index].likes += 1;
        }
        renderComments(0, currentToken);
        // getAndRenderComments(currentToken);
      }
    })
    .catch((error) => {
      console.warn(error);
      if ((error.message = "Failed to fetch")) {
        alert("Нет соединения с интернетом");
      }
    });
}

// Пока не работает, ждем возможностей от API
// function edit(index) {

//     if (comments[index].isEdit === false) {
//         comments[index].isEdit = true;

//     } else {
//         let currentTextarea = document.querySelectorAll('.comment')[index].querySelector('textarea');

//         if (currentTextarea.value !== '') {
//             comments[index].isEdit = false;
//             comments[index].text = safeInput(currentTextarea.value);
//         }
//     }
//     renderComments();
// };

export { comments, getAndRenderComments, renderComments };
