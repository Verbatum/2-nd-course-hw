export const initLikesListeners = ({comments, renderComments, list, addButton, textarea}) => {
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
        renderComments({comments, list, addButton, textarea, initLikesListeners});
      });
    }
  };