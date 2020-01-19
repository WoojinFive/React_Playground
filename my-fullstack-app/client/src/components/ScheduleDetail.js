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
import './ScheduleDetail.scss';

class ScheduleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { schedule: this.props.schedule };
  }

  onToggle(contactId, itemId) {
    const newSchedule = this.state.schedule
      .map((item) => 
        item.index === itemId ? { ...item, checked: !item.checked } : item 
      );

    Axios.put(`${process.env.REACT_APP_API_URI}/contacts/${contactId}`, { meetingHistory: newSchedule })
    .then(res => {
      this.setState({ schedule: res.data.meetingHistory });
    })

  }

  render() {
    if (this.state.schedule.length === 0) {
      return (
        <p>No data</p>
      )
    }
    return (
      <>
        {this.state.schedule.map((item, index) => {
          const checked = item.checked;
          const readonly = item.readonly;
          return (
            <div className="TodoListItem" key={index}>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-md-1" onClick={() => this.onToggle(this.props.contactId, item.index)}>
                    {checked? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                  </div>
                  <div className="col-md-10">
                    <div 
                      className={cn('checkbox', { checked })}
                      onClick={() => this.onToggle(this.props.contactId, item.index)}
                    >
                      <div className="row">
                        <div className="text col-md-2">
                          <p className="border-right">Date</p>
                        </div>
                        <div className="text col-md-10">
                          {item.date}
                        </div>
                      </div>
                      <div className="row">
                        <div className="text col-md-2">
                          <p className="border-right">Purpose</p>
                        </div>
                        <div className="text col-md-10">
                          {readonly? item.purpose : <input value={item.purpose} onChange={onChange} />}
                        </div>
                      </div>
                      <div className="row">
                        <div className="text col-md-2">
                          <p className="border-right">Place</p>
                        </div>
                        <div className="text col-md-10">
                          {item.place.building + ', ' + item.place.street + ', ' + item.place.city + ', ' + item.place.state + ', ' + item.place.zip}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    {checked? 
                      null 
                    : 
                      (readonly? 
                        <div className="row edit">
                          <MdModeEdit />
                          {/* <button type="button" className="btn btn-sm btn-outline-secondary"><MdModeEdit /></button> */}
                        </div>
                      :
                      <div className="row edit">
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
          );
        })}
      </>
    );
  }
}
 
export default ScheduleDetail;