
import Axios from 'axios';
import jwt_decode from 'jwt-decode';

class Auth {
  // constructor() {
    // this.authenticated = localStorage.getItem('token');
  // }

  register(state, cb) {
    //send state to the api
    Axios.post(`${process.env.REACT_APP_API_URI}/users/register`, state)
    .then(res => {
      if(res.status === 200) {
        this.makeToken(res);
      }
      cb(null, res);
    })
    .catch(err => {
      // handle error
      cb(err.response, null);
    });
  }

  login(state, cb) {
    Axios.post(`${process.env.REACT_APP_API_URI}/users/login`, state)
    .then(res => {
      if(res.status === 200) {
      this.makeToken(res)     
      }
      cb(null, res);
    })
    .catch(err => {
    // handle error
      cb(err.response, null);
    });
  }

  logout() {
    this.removeToken();
  }

  isAuthenticated() {
    return localStorage.getItem('token');
    // return this.authenticated;
  }

  makeToken(res) {
    localStorage.setItem('token', res.headers['x-auth-token']);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  doJwtDecode() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    return decoded;
  }
}

export default new Auth();