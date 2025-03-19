import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createRace = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/races`, {
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

const getAllRaces = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/races`, {
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
const getSingleRace = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/races/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleRace = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/racess/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateRace = (id) => new Promise((resolve, reject) => {
  fetch (`${endpoint}/races/${id}`, {
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
  createRace, getSingleRace, deleteSingleRace, getAllRaces, updateRace
};
