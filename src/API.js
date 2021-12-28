const url = 'https://floating-harbor-48342.herokuapp.com/houses/';
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

export const fetchHouses = () => fetch('https://floating-harbor-48342.herokuapp.com/houses', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
})
  .then((resp) => resp.json())
  .then((data) => data,
    () => {
    });

export const fetchFavourites = () => fetch('https://floating-harbor-48342.herokuapp.com/favourites', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
})
  .then((resp) => resp.json())
  .then((data) => data,
    () => {
    });

export const deleteFavApi = (id) => fetch('https://floating-harbor-48342.herokuapp.com/favourites/1', {
  method: 'DELETE',
  body: JSON.stringify({
    house_id: id,
  }),
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
})
  .then((resp) => resp.json());

export const createFavApi = (id) => fetch('https://floating-harbor-48342.herokuapp.com/favourites/', {
  method: 'POST',
  body: JSON.stringify({
    house_id: id,
  }),
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
})
  .then((resp) => resp.json());

export const fetchhouseApi = () => fetch((url + localStorage.getItem('houseid')), {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
})
  .then((resp) => resp.json());
