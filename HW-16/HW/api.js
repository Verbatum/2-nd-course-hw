const host = 'https://wedev-api.sky.pro/api/v2/aleksey-kuzmenchuk/comments';
const regHost = 'https://webdev-hw-api.vercel.app/api/user';
const loginHost = 'https://webdev-hw-api.vercel.app/api/user/login';

let token = null;

export const getComments = ({token}) => {
    return fetch(host, {
        method: "GET",
        headers: {
          Authorization: token,
        },
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
        body: JSON.stringify({
          text: textarea.value,
          name: nameInput.value,
        }),
        headers: {
          Authorization: token,
        },
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

export function registerUser({ login, password, name }) {

  return fetch(regHost, {
    method: 'POST',
    body: JSON.stringify({
      login,
      password,
      name
    }),
  }).then((response) => {
    if (response.status === 400){
      throw new Error ("Такой пользователь уже существует")
    }    
    return response.json();
  })
};

export function loginUser({ login, password }) {
    
  return fetch(loginHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      
    }),
  }).then((response) => {
      if (response.status === 400){
       
        throw new Error ("Неверный логин или пароль")
      }
      
      return response.json()
      
  });
}