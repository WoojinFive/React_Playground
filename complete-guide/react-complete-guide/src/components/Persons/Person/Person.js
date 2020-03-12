import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;

/*
styled component
*/

// import React from 'react';
// import styled from 'styled-components';

// // import './Person.css';

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

// const Person = props => {
//   return (
//     <StyledDiv>
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       <p>{props.children}</p>
//       <input type='text' onChange={props.changed} value={props.name} />
//     </StyledDiv>
//   );
// };

// export default Person;

/*
Radium version
*/
// import React from 'react';
// import Radium from 'radium';

// import './Person.css';

// const Person = props => {
//   const style = {
//     '@media (min-width: 500px)': {
//       width: '450px'
//     }
//   };

//   return (
//     <div className='Person' style={style}>
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       <p>{props.children}</p>
//       <input type='text' onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

// export default Radium(Person);
