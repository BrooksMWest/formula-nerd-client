import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createNation = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/nations`, {
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

const getAllNations = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/nations`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
// GET A SINGLE DRIVER FROM THE DATABASE
const getSingleNation = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/nations/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleNation = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/nations/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateNation = (id) => new Promise((resolve, reject) => {
  fetch (`${endpoint}/nations/${id}`, {
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
  createNation, getSingleNation, deleteSingleNation, getAllNations, updateNation
};
