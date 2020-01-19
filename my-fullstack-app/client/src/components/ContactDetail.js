import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import ScheduleList from './ScheduleList';

class ContactDetail extends Component {
  state = {
    contact: ''
  }

  componentDidMount() {
    this.setState({ contact: this.props.contact });
  }

  handleDelete = (index) => {
    Axios.delete(`${process.env.REACT_APP_API_URI}/contacts/${index}`)
      .then(res => {
        if(res.status === 200) {
          return this.props.history.push('/');
        }
      })
      .catch(error => {

      })
  }

  render() {
    return (
      Object.keys(this.state.contact).length > 0 &&
      <>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-10">
                <div className="card mb-4 box-shadow">
                  <div className="row justify-content-md-around pb-5">
                    <div className="col-md-4 mt-5 pl-5">
                      <img 
                        className="card-img-top" 
                        // data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        style={{height: 225, width: '100%', display: 'block'}}
                        // src={this.props.contact.picture}
                        src={'https://robohash.org/' + this.state.contact.name.first + '?set=set2'} 
                        // src={'https://identicon.rmhdev.net/' + this.state.contact.name.first +'.png'}
                        // data-holder-rendered="true" 
                      />
                    </div>
                    <div className="card-body col-md-6 pt-5">
                      <div className="row">
                        <div className="col-md-4">
                          <p className="border-right">Name</p>
                        </div>
                        <div className="col-md-8">
                          <p className="card-text" style={{marginBottom: 0.5+'rem'}}>{this.state.contact.name.first} {this.state.contact.name.last}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <p className="border-right">Relationship</p>
                        </div>
                        <div className="col-md-8">
                          <p className="card-text" style={{marginBottom: 0.5+'rem'}}>{this.state.contact.relationship}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <p className="border-right">Age</p>
                        </div>
                        <div className="col-md-8">
                          <p className="card-text" style={{marginBottom: 0.5+'rem'}}>{this.state.contact.age? this.state.contact.age + ' years old' : ''}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <p className="border-right">Email</p>
                        </div>
                        <div className="col-md-8">
                          <p className="card-text" style={{marginBottom: 0.5+'rem'}}>{this.state.contact.email}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <p className="border-right">Phone</p>
                        </div>
                        <div className="col-md-8">
                          <p className="card-text" style={{marginBottom: 0.5+'rem'}}>{this.state.contact.phone}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <p className="border-right">Address</p>
                        </div>
                        <div className="col-md-8">
                          <p className="card-text">{this.state.contact.address.building + ' ' + (this.state.contact.address.street ? this.state.contact.address.street + ', ' : '') + (this.state.contact.address.city ? this.state.contact.address.city + ', ' : '') + (this.state.contact.address.state ? this.state.contact.address.state + ', ' : '') + this.state.contact.address.zip}</p>
                        </div>
                      </div>
                    </div>  
                  </div>
                  <div className="row justify-content-md-around">
                    <div className="col-md-10">
                      <h4>Meeting Schedule</h4>
                    </div>
                  </div>
                  <div className="row justify-content-md-around pb-5">
                    <div className="col-md-10">
                      <ScheduleList schedule={this.state.contact.meetingHistory} contactId={this.state.contact.index} />
                    </div>
                  </div>
                  <div className="d-flex justify-content-around align-items-center">
                    <div className="btn-group">
                      {/* Edit */}
                      <Link
                        to={{
                          pathname: `/${this.props.contact.index}/edit`,
                          state: {
                            contact: this.props.contact
                          }
                        }}
                        style={{ textDecoration: 'none', color: '#6c757d' }}
                        >
                        <button type="button" className="btn btn-sm btn-outline-secondary ml-1 mr-1">Edit</button>
                      </Link>
                      {/* <Link 
                        to={"/"}
                        style={{ textDecoration: 'none', color: '#6c757d' }}
                        // onClick={console.log(this.props.index)}
                      > */}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          data-toggle="modal"
                          data-id={this.props.contact.index}
                          data-target="#DeleteModal"
                          // onClick={this.handleDelete.bind(this, this.props.contact.index)}
                        >
                          Delete
                        </button>
                      {/* </Link> */}
                    </div>
                    <small className="text-muted"><Moment fromNow>{this.props.contact.registered}</Moment></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal */}
        <div id="DeleteModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="DeleteModalLabel">
          <div className="modal-dialog" role="document">
            {/* Modal content */}
            <form action="" id="deleteForm" method="post">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title text-md-center w-100" id="DeleteModalLabel">DELETE CONFIRMATION</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="text-center">Are You Sure Want To Delete ?</p>
                </div>
                <div className="modal-footer">
                  <center>
                    <button type="button" className="btn btn-success mr-3" data-dismiss="modal">Cancel</button>
                    <Link
                      to='/'
                      style={{ textDecoration: 'none', color: '#6c757d' }}
                    >
                      <button type="submit" name="" className="btn btn-danger" data-dismiss="modal" onClick={() => this.handleDelete(this.props.contact.index)}>Delete</button>
                    </Link>
                  </center>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
 
export default ContactDetail;