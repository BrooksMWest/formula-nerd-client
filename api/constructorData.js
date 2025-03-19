import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createConstructor = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/constructors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getAllConstructors = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/constructors`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
// GET A SINGLE CONSTRUCTOR FROM THE DATABASE
const getSingleConstructor = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/constructors/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleConstructor = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/constructors/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateConstructor = (id) => new Promise((resolve, reject) => {
  fetch (`${endpoint}/constructors/${id}`, {
    method:'PUT',
    headers: {
      'Contend-Type': 'application/json',
    }
  })
    .then((response) =>  response.json())
    .then((data) => resolve(data))
    .catch(reject);
})

export {
  createConstructor, getSingleConstructor, deleteSingleConstructor, getAllConstructors, updateConstructor
};
