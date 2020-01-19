import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {
  AiOutlineSchedule
} from 'react-icons/ai';
import './Card.scss';

class Contact extends Component {
  handleDelete(index) {
    this.props.handleDelete(index);
  }

  render() {
    return (
      <>
        <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <img 
              className="card-img-top" 
              data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
              alt="Thumbnail [100%x225]" 
              style={{height: 225, width: '100%', display: 'block'}}
              src={'https://robohash.org/' + this.props.contact.name.first + '?set=set2'} 
              //src={'https://identicon.rmhdev.net/' + this.props.contact.name.first +'.png'}
              // src={'https://randomuser.me/api/portraits/lego/' + this.props.contact.index + '.jpg'}
              data-holder-rendered="true" />
            <div className="card-body">
              <div className="row justify-content-around">
                <div className="col-md-8">
                  <p className="card-text">{this.props.contact.name.first} {this.props.contact.name.last}</p>
                </div>
                <div className="col-md-1 icon-schedule">
                  <AiOutlineSchedule />
                </div>
                <div className="col-md-2">
                  <p>
                    {this.props.contact.meetingHistory.filter((item) => item.checked === false).length}
                  </p>
                </div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn">
                  {/* View */}
                  <Link 
                    to={{
                      pathname: `/${this.props.contact.index}`,
                      state: {
                        contact: this.props.contact
                      }
                    }}
                    style={{ textDecoration: 'none', color: '#6c757d' }}
                  >
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                  </Link>
                  {/* Edit */}
                  <Link
                    to={{
                      pathname: `/${this.props.contact.index}/edit`,
                      state: {
                        contact: this.props.contact,
                        referer: '/'
                      }
                    }}
                    style={{ textDecoration: 'none', color: '#6c757d' }}
                    >
                    <button type="button" className="btn btn-sm btn-outline-secondary ml-1 mr-1">Edit</button>
                  </Link>
                  {/* Delete */}
                  <Link 
                    to={"/"}
                    style={{ textDecoration: 'none', color: '#6c757d' }}
                    // onClick={console.log(this.props.index)}
                  >
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
                  </Link>
                </div>
                <small className="text-muted"><Moment fromNow>{this.props.contact.registered}</Moment></small>
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
                    <button type="submit" name="" className="btn btn-danger" data-dismiss="modal" onClick={this.handleDelete.bind(this, this.props.contact.index)}>Delete</button>
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
 
export default Contact;