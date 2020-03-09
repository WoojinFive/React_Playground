import React from 'react';

import './UserOutput.css';

const UserOutput = props => {
  return (
    <div className='UserOutput'>
      <p>Username: {props.userName}</p>
      <p>Paragraph 2</p>
    </div>
  );
};

export default UserOutput;
