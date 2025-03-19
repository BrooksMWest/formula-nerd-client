import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createDriver = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/drivers`, {
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

const getAllDrivers = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/drivers`, {
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
const getSingleDriver = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/drivers/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleDriver = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/drivers/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateDriver = (id) => new Promise((resolve, reject) => {
  fetch (`${endpoint}/drivers/${id}`, {
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
  createDriver, getSingleDriver, deleteSingleDriver, getAllDrivers, updateDriver
};
