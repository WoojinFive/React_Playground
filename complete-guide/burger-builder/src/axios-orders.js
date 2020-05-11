import axios from 'axios';

const instance = axios.create({
  baseURL: 'hamburger-builder-d2150.firebaseapp.com/',
});

export default instance;
