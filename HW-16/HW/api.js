const host = 'https://wedev-api.sky.pro/api/v2/aleksey-kuzmenchuk/comments';
const loginHost = "https://wedev-api.sky.pro/api/user/login";

/* export let token;

export const setToken = (newToken) => {
  token = newToken;
} */

export const getComments = () => {
    return fetch(host, {
        method: "GET",
      })
        .then((response) => {
          if (response.status === 500) {
            throw new Error("Server's problem");
          } else {
            return response.json();
          }
        })
};

export const postComments = ({textarea, nameInput}) => {
    return fetch(host, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
};

export function fetchLogin(login, password) {
  return fetch(loginHost, {
    method: 'POST',
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    return response.json();
  })
};