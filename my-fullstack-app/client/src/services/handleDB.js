
import Axios from 'axios';

class HandleDB {
  create(state, cb) {
    Axios.post(`${process.env.REACT_APP_API_URI}/contacts`, state)
    .then(res => {
      cb(null, res);
    })
    .catch(err => {
    // handle error
      cb(err.response, null);
    });
  }

  edit(state, index, cb) {
    Axios.put(`${process.env.REACT_APP_API_URI}/contacts/${index}`, state)
    .then(res => {
      cb(null, res);
    })
    .catch(err => {
    // handle error
      cb(err.response, null);
    });
  }
}

export default new HandleDB();