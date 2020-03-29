import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
  state = {
    name: '',
    age: ''
  };

  nameChangedHandler = event => {
    this.setState({ name: event.target.value });
  };

  ageChangedHandler = event => {
    this.setState({ age: event.target.value });
  };

  onButtonClickHandler = event => {
    const newState = { ...this.state };
    this.setState({ name: '', age: '' });
    return this.props.personAdded(newState.name, newState.age);
  };

  render() {
    return (
      <div className='AddPerson'>
        <input
          type='text'
          placeholder='Name'
          onChange={this.nameChangedHandler}
          value={this.state.name}
        />
        <input
          type='number'
          placeholder='Age'
          onChange={this.ageChangedHandler}
          value={this.state.age}
        />
        <button onClick={this.onButtonClickHandler}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;
