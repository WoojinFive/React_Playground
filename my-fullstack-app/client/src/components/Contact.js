import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {
  AiOutlineSchedule
} from 'react-icons/ai';
import './Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img 
            className="card-img-top" 
            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
            alt="Thumbnail [100%x225]" 
            style={{height: 225, width: '100%', display: 'block'}}
            src={'https://identicon.rmhdev.net/' + this.props.contact.name.first +'.png'}
            // src={'https://robohash.org/' + this.props.contact.name.first} 
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
              <div className="btn-group">
                <Link 
                  to={"/" + this.props.contact.index}
                  style={{ textDecoration: 'none', color: '#6c757d' }}
                >
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                </Link>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
              </div>
              <small className="text-muted"><Moment fromNow>{this.props.contact.registered}</Moment></small>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}
 
export default Contact;