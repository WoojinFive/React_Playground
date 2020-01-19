import React, { Component } from 'react';
import Axios from 'axios';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdModeEdit,
  MdDone,
} from 'react-icons/md';
import cn from 'classnames';
import './ScheduleItem.scss';

class ScheduleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: this.props.schedule,
      item: this.props.item,
      contactId: this.props.contactId
    };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle = (contactId, itemId) => {
    if(this.state.item.readonly === true) {
      const newItem = this.props.schedule.map(item => (
        item.index === itemId ? { ...this.state.item, checked: !this.state.item.checked } : item
      ));

      this.setState({
        schedule: newItem
      });

      Axios.put(`${process.env.REACT_APP_API_URI}/contacts/${contactId}`, { meetingHistory: newItem })
      .then(res => {
        res.data.meetingHistory.map(item => (
          item.index === itemId ? this.setState({item: item}) : null
        ));
      })
    }
  }

  onEdit = () => {
    const newItem = { ...this.state.item, readonly: !this.state.item.readonly };
    this.setState({
      item: newItem
    });
  }

  onUpdate = (contactId, itemId) => {
    const newItem = this.props.schedule.map(item => (
      item.index === itemId ? { ...this.state.item, readonly: !this.state.item.readonly } : item
    ));

    this.setState({
      schedule: newItem
    });

    Axios.put('http://localhost:5000/api/contacts/' + contactId, { meetingHistory: newItem })
    .then(res => {
      res.data.meetingHistory.map(item => (
        item.index === itemId ? this.setState({item: item}) : null
      ));
    })
  }

  onChange = (e) => {
    const newItem = { ...this.state.item, [e.target.name]: e.target.value };
    this.setState({
      item: newItem
    });
  }

  render() {
    const checked = this.state.item.checked;
    const readonly = this.state.item.readonly;
    return (
      <div className="TodoListItem">
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-1" onClick={() => this.onToggle(this.state.contactId, this.state.item.index)}>
              {checked? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div>
            <div className="col-md-10">
              <div 
                className={cn('checkbox', { checked })}
                onClick={() => this.onToggle(this.state.contactId, this.state.item.index)}
              >
                <div className="row">
                  <div className="text col-md-2">
                    <p className="border-right">Date</p>
                  </div>
                  <div className="text col-md-10">
                    {this.state.item.date}
                  </div>
                </div>
                <div className="row">
                  <div className="text col-md-2">
                    <p className="border-right">Purpose</p>
                  </div>
                  <div className="text col-md-10">
                    {readonly? this.state.item.purpose : <input name="purpose" value={this.state.item.purpose} onChange={this.onChange} />}
                  </div>
                </div>
                <div className="row">
                  <div className="text col-md-2">
                    <p className="border-right">Place</p>
                  </div>
                  <div className="text col-md-10">
                    {this.state.item.place.building + ', ' + this.state.item.place.street + ', ' + this.state.item.place.city + ', ' + this.state.item.place.state + ', ' + this.state.item.place.zip}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1">
              {checked? 
                null 
              : 
                (readonly? 
                  <div className="row edit" onClick={() => this.onEdit()}>
                    <MdModeEdit />
                    {/* <button type="button" className="btn btn-sm btn-outline-secondary"><MdModeEdit /></button> */}
                  </div>
                :
                <div className="row edit" onClick={() => this.onUpdate(this.state.contactId, this.state.item.index)}>
                  <MdDone />
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary"><MdModeEdit /></button> */}
                </div>
                )
              }
              <div className="row remove mt-3">
                <MdRemoveCircleOutline />
                {/* <button type="button" className="btn btn-sm btn-outline-secondary"><MdRemoveCircleOutline /></button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )     
  }
}

export default ScheduleItem;