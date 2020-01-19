import React, { Component } from 'react';
import './ScheduleList.scss';
import ScheduleItem from './ScheduleItem';

class ScheduleList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      schedule: this.props.schedule, 
      contactId: this.props.contactId
    };
  }

  render() {
    if (this.state.schedule.length === 0) {
      return (
        <p>No data</p>
      )
    }
    return (
      <>
        {
          this.state.schedule.map((item, index) => (
          <ScheduleItem
            schedule={this.state.schedule}
            item={item}
            contactId={this.state.contactId}
            key={index}
          />
          ))
        }
      </>
    );
  }
}
 
export default ScheduleList;