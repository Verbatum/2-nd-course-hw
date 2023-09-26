export const initEventListeners = ({comments, renderComments, checkInput, initCommentingListeners, editCommentListeners}) => {
  const likeElements = document.querySelectorAll(".like-button");
  likeElements.forEach((element, index) => {
    element.addEventListener('click', (event) => {
      event.stopPropagation();
      if (comments[index].isLiked) {
        comments[index].isLiked = false;
        comments[index].likes -= 1;
      } else {
        comments[index].isLiked = true;
        comments[index].likes += 1;
      }
      renderComments({ comments, checkInput, initEventListeners, initCommentingListeners, editCommentListeners });
    })
  })
  };
  // Счётчик лайков и отображение лайков на комментарии
  import {initEventListeners} from "./like.js";
  initLikesListeners({comments, renderComments, list, addButton, textarea});
  {comments, renderComments, checkInput, initCommentingListeners, editCommentListeners}