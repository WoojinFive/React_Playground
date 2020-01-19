import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import ContactDetail from './ContactDetail';
import NoMatch from './NoMatch';
import { Spinner } from 'react-bootstrap';

class ViewContact extends Component {
  _isMounted = false;
  
  state = {
    contact : '',
  }

  componentDidMount() {
    this._isMounted = true;

    Axios.get(`${process.env.REACT_APP_API_URI}/contacts${this.props.match.url}`)
    .then(res => {
      if (this._isMounted) {
        this.setState({ contact: res.data });
      }
    })
    .catch(error => {
      // handle error
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if(isNaN(this.props.match.params['index'])) {
      return (
        <>
          <NoMatch />
        </>
      )
    } else if(this.props.location.state) {
      return <ContactDetail {...this.props} contact={this.props.location.state.contact} />
    } else if(this.state.contact.length > 0) {
      if(this.state.contact[0] === 'noexist'){ //if incorrect id
        return (
          <Redirect to='/' />
        )
      } else {
        return (
          Object.keys(this.state.contact[0]).length > 0 && 
          <ContactDetail 
            contact={this.state.contact[0]} 
          />
        )
      }
    } else { 
      return (
        <>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row justify-content-md-center align-middle">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
}
 
export default ViewContact;