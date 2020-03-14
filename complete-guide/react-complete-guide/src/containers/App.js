import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'a1', name: 'Max', age: 28 },
      { id: 'b1', name: 'Manu', age: 29 },
      { id: 'c1', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);

/*
styled component
*/

// import React, { Component } from 'react';
// import './App.css';
// import styled from 'styled-components';

// import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color: ${props => (props.alt ? 'red' : 'green')};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => (props.alt ? 'salmon' : 'lightgreen')};
//     color: black;
//   }
// `;

// class App extends Component {
//   state = {
//     persons: [
//       { id: 'a1', name: 'Max', age: 28 },
//       { id: 'b1', name: 'Manu', age: 29 },
//       { id: 'c1', name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value',
//     showPersons: false
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });
//     const person = {
//       ...this.state.persons[personIndex]
//     };
//     // const person = Object.assign({}, this.state.persons[personIndex]);

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({
//       persons: persons
//     });
//   };

//   deletePersonHandler = personIndex => {
//     // const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({ persons: persons });
//   };

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({
//       showPersons: !doesShow
//     });
//   };

//   render() {
//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//                 click={() => this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 changed={event => this.nameChangedHandler(event, person.id)}
//               />
//             );
//           })}
//         </div>
//       );
//     }

//     const classes = [];
//     if (this.state.persons.length <= 2) {
//       classes.push('red'); // classes = ['red']
//     }
//     if (this.state.persons.length <= 1) {
//       classes.push('bold'); // classes = ['red', 'bold']
//     }

//     return (
//       <div className='App'>
//         <h1>Hi, I'm a React App</h1>
//         <p className={classes.join(' ')}>This is really working!</p>
//         <StyledButton
//           alt={this.state.showPersons}
//           onClick={this.togglePersonsHandler}
//         >
//           Toggle Persons
//         </StyledButton>
//         {persons}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }

// export default App;

/*
Radium version
*/

// import React, { Component } from 'react';
// import './App.css';
// import Radium, { StyleRoot } from 'radium';
// import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { id: 'a1', name: 'Max', age: 28 },
//       { id: 'b1', name: 'Manu', age: 29 },
//       { id: 'c1', name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value',
//     showPersons: false
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });
//     const person = {
//       ...this.state.persons[personIndex]
//     };
//     // const person = Object.assign({}, this.state.persons[personIndex]);

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({
//       persons: persons
//     });
//   };

//   deletePersonHandler = personIndex => {
//     // const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({ persons: persons });
//   };

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({
//       showPersons: !doesShow
//     });
//   };

//   render() {
//     const style = {
//       backgroundColor: 'green',
//       color: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer',
//       ':hover': {
//         backgroundColor: 'lightgreen',
//         color: 'black'
//       }
//     };

//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//                 click={() => this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 changed={event => this.nameChangedHandler(event, person.id)}
//               />
//             );
//           })}
//         </div>
//       );

//       style.backgroundColor = 'red';
//       style[':hover'] = {
//         backgroundColor: 'salmon',
//         color: 'black'
//       };
//     }

//     const classes = [];
//     if (this.state.persons.length <= 2) {
//       classes.push('red'); // classes = ['red']
//     }
//     if (this.state.persons.length <= 1) {
//       classes.push('bold'); // classes = ['red', 'bold']
//     }

//     return (
//       <StyleRoot>
//         <div className='App'>
//           <h1>Hi, I'm a React App</h1>
//           <p className={classes.join(' ')}>This is really working!</p>
//           <button style={style} onClick={this.togglePersonsHandler}>
//             Toggle Persons
//           </button>
//           {persons}
//         </div>
//       </StyleRoot>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }

// export default Radium(App);
