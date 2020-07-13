import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Hajun from './components/Hajun';

const App = () => {
  return (
    <Switch>
      <Route path='/hajun' render={(props) => <Hajun {...props} />} />
      <Route path='/' exact component={Home} />
      <Redirect to='/' />
    </Switch>
  );
};

export default App;
