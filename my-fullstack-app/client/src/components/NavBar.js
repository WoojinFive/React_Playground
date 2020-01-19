import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../services/auth';

class NavBar extends React.Component {
  // updateTimeStamp = () => {
  //   this.props.updateTimeStamp();
  // }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <Link 
          to="/" className="navbar-brand d-flex align-items-center" 
          style={{ textDecoration: 'none', color: '#ffffff' }}
          onClick={this.props.updateTimeStamp}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
          <strong>My Fullstack App</strong>
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link 
                  to="/" 
                  className="nav-link" 
                  style={{ textDecoration: 'none', color: '#ffffff' }}
                  onClick={this.props.updateTimeStamp}
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Enlist New Contact</Link>
              </li>
            </ul>
  
            {this.props.isAuth ? 
              (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle active" to="/#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Welcome {auth.doJwtDecode().email}</Link>
                    <div className="dropdown-menu" aria-labelledby="dropdown07">
                      <Link className="dropdown-item" to="/" onClick={() => {
                        auth.logout();
                        this.props.checkAuth();
                        // return <Redirect to='/' /> 
                      }}
                      >Logout</Link>
                    </div>
                  </li>
                </ul> 
              ):
              <ul className="navbar-nav ml-auto">''
                <li className="nav-item">
                  <Link to="/signin" className="nav-link active" style={{ textDecoration: 'none', color: '#ffffff' }}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link active" style={{ textDecoration: 'none', color: '#ffffff' }}>Register</Link>
                </li>
              </ul> 
            }
          </div>
            
        </div>
      </nav>
    );
  }
}
 
export default NavBar;