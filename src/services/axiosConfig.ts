import axios from 'axios';

let localId;

if (typeof window !== 'undefined') {
  localId = localStorage.getItem('userLoggedId');
}

const API = axios.create({
  baseURL: 'https://us-central1-salvaesse-link.cloudfunctions.net/api',
  headers: {
    authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_API_HEADER,
    user_id: localId
  },
  timeout: 5000
});

export default API;
