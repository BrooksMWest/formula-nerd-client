import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createCircuit = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/circuits`, {
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

const getAllCircuits = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/circuits`, {
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
const getSingleCircuit = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/circuits/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleCircuit = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/circuits/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateCircuit = (id) => new Promise((resolve, reject) => {
  fetch (`${endpoint}/circuits/${id}`, {
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
  createCircuit, getSingleCircuit, deleteSingleCircuit, getAllCircuits, updateCircuit
};
