import React from 'react';
import Axios from 'axios';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import Card from './Card';
import { Spinner } from 'react-bootstrap';

class Main extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      initialContacts: '',
      searchKeyword: '',
      searchError: false,
    };
  }  


  componentDidMount() {
    this._isMounted = true;
    //grap some data
    Axios.get(`${process.env.REACT_APP_API_URI}/contacts`)
      .then(res => {
        if (this._isMounted) {
          this.setState({ contacts: res.data });
          this.setState({ initialContacts: res.data });
        }
      })
      .catch(error => {
        // handle error
        console.log(error);
        setTimeout(() => window.location.reload(), 3000);
      });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps) {
    if(prevProps.timeStamp !== this.props.timeStamp) {
      this.setState({ contacts: this.state.initialContacts });
    }
  };

  handleChange = (e) => {
    this.setState({searchKeyword: {}, searchError: false});

    const {name, value} = e.target;

    this.setState({
        [name]: value
    })
  }

  handleSearch = () => {
    if(!this.state.searchKeyword) {
      return this.componentDidMount();
    }
    Axios.get(`${process.env.REACT_APP_API_URI}/contacts/search/${this.state.searchKeyword}`)
      .then(res => {
        if(res.data.length === 0) {
          this.setState({ 
            contacts: this.state.initialContacts,
            searchError: true
          });
          setTimeout(() => this.setState({searchError: false}), 3000);
        } else {
          this.setState({ contacts: res.data, searchError: false });
        }
      })
      .catch(error => {
        // handle error
      });
  }

  handleDelete = (index) => {
    Axios.delete(`${process.env.REACT_APP_API_URI}/contacts/${index}`)
      .then(res => {
        if(res.status === 200) {
          // window.location.reload();
          const contacts = this.state.initialContacts.filter(contact => contact.index !== index);
          this.setState({ contacts: contacts, initialContacts: contacts });
        }
      })
      .catch(error => {

      })
  }
  

  render() {
    if(this.state.contacts.length > 0){
      return ( 
        <>
          <div>
            <section className="jumbotron text-center">
              <div className="container">
                <div className="input-group">
                  <input type="text" className="form-control" name="searchKeyword" placeholder="Search this site" onChange={this.handleChange} />
                  <div className="input-group-append">
                    <button className="btn btn-secondary" type="button" onClick={this.handleSearch}>
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row justify-content-center mb-5">
                  <div>
                    {this.state.searchError === true ? 
                      <span>There is no data contains '{this.state.searchKeyword}' keyword.</span> 
                    : ''}
                    
                  </div>
                </div>
                <div className="row">
                  {this.state.contacts.map((contact) => (
                    <Card 
                      contact={contact} 
                      key={contact._id} 
                      handleDelete={this.handleDelete.bind(this)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row justify-content-sm-center align-middle">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            </div>
          </div>
        </>
      )
    }
    
  }
}
 
export default Main;