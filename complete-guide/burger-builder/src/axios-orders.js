import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hamburger-builder-d2150.firebaseio.com/'
});

export default instance;
