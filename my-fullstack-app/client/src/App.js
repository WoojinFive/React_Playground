import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Footer from './components/Footer';
import ViewContact from './components/ViewContact';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
// import Delete from './components/Delete';
import auth from './services/auth';
import { ProtectedRoute } from "./components/ProtectedRoute";

import 'bootstrap/dist/css/bootstrap.min.css';

import './css/app.css';


class App extends React.Component {
  state = {
    isAuth: auth.isAuthenticated(),
    timeStamp: 1
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          isAuth={this.state.isAuth}
          checkAuth={() => {
            this.setState({ isAuth: auth.isAuthenticated() });
          }}
          updateTimeStamp={() => {
            this.setState({ timeStamp: new Date() });
          }}
        />
        <div id="main-content">
          <Switch>
            {/* <Route path="/" component={Main} exact></Route> */}
            <Route path="/" render={(props) => <Main {...props} timeStamp={this.state.timeStamp} /> } exact/>
            {/* {auth.isAuthenticated() ? <Route path="/signin" component={Main} ></Route> : <Route path="/signin" component={SignIn} ></Route>}  */}
            {/* <Route path="/signin" component={SignIn} ></Route>} */}
            <Route path ="/signin" render={(props) => <SignIn {...props} checkAuth={() => {
                this.setState({ isAuth: auth.isAuthenticated() });
              }} />} 
            />
            {/* <Route path="/register" component={Register}></Route> */}
            <Route path = "/register" render={(props) => <Register {...props} checkAuth={() => {
                this.setState({ isAuth: auth.isAuthenticated() });
              }} />} 
            />
            <ProtectedRoute path="/create" component={CreateForm}></ProtectedRoute>
            <ProtectedRoute path="/:index" component={ViewContact} exact></ProtectedRoute>
            <ProtectedRoute path="/:index/edit" component={EditForm} exact></ProtectedRoute>
            {/* <ProtectedRoute path="/:index/delete" component={Delete} exact></ProtectedRoute> */}
            <Route path="*" component={NoMatch}></Route>
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
  
}

const NoMatch = () => {
  let location = useLocation();
  
  return (
    <div>
      <h1>404 - Path {location.pathname} not found</h1>
    </div>
  )
}

export default App;
