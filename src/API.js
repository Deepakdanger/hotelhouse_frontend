export const loginApi = (user, password) => fetch('https://floating-harbor-48342.herokuapp.com/authenticate', {
  method: 'POST',
  body: JSON.stringify({
    email: user,
    password,
  }),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
  .then((resp) => resp.json());

export const signinApi = (name, user, password) => fetch('https://floating-harbor-48342.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify({
    name,
    email: user,
    password,
  }),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
  .then((resp) => resp.json());

export const signinAPI = () => {
  console.log('hello');
};
