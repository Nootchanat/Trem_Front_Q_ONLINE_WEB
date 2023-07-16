import axios from 'axios';

<<<<<<< HEAD
export const baseURL = 'http://localhost:5000/';
=======
export const baseURL = 'https://tasty-trench-coat.cyclic.app/';
>>>>>>> beckhado

export const InstanceFormBody = axios.create({
  baseURL: baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const InstanceFormData = axios.create({
  baseURL: baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
