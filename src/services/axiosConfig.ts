import axios from 'axios';

const API = axios.create({
  baseURL: 'https://us-central1-salvaesse-link.cloudfunctions.net/api',
  headers: {
    authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_API_HEADER
  },
  timeout: 8000
});

export default API;
