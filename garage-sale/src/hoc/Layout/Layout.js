import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Map from '../../components/Map/Map';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <Map />
      </Aux>
    );
  }
}

export default Layout;
