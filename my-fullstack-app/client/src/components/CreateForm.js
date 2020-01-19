import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Joi from 'joi-browser';
import HandleDB from '../services/handleDB';

class CreateForm extends Component {
  state = {
    contact: {
      picture: 'https://scienceofstocks.com/wp-content/uploads/2014/10/default-img.gif',
      name: {
        first: '',
        last: ''
      },
      relationship: '',
      age: '',
      email: '',
      phone: '',
      address: {
        building: '',
        street: '',
        city: '',
        state: '',
        country: '',
        zip: ''
      }
    },
    errors: {}
  }

  schema = {
    picture: Joi.string().uri().required().label("Picture"),
    name: {
      first: Joi.string().regex(/^[A-Z][a-z]+$/).required().label("First Name")
              .options({ language: { string: { regex: { base: 'must begin with a capital letter followed by one or more lower case letters.' } } } }),
      last: Joi.string().regex(/^[A-Z][a-z]+$/).required().label("Last Name")
              .options({ language: { string: { regex: { base: 'must begin with a capital letter followed by one or more lower case letters.' } } } })
    },
    relationship: [Joi.string().label("Relationship"), Joi.allow(null)],
    age: [Joi.number().label('Age'), Joi.allow(null)],
    email: [Joi.string().email().label("Email Address"), Joi.allow(null)],
    phone: [Joi.string().label("Phone"), Joi.allow(null)],
    address: {
      building: [Joi.string().label("Building"), Joi.allow(null)],
      street: [Joi.string().label("Street"), Joi.allow(null)],
      city: [Joi.string().label("City"), Joi.allow(null)],
      state: [Joi.string().label("State"), Joi.allow(null)],
      country: [Joi.string().label("Country"), Joi.allow(null)],
      zip: [Joi.string().label("Zip"), Joi.allow(null)]
    }
  }

  validate = () => {
    const {error} = Joi.validate(this.state.contact, this.schema, {abortEarly: false});
    if(!error) return null;
    
    //return errors object
    const errors = {};

    error.details.forEach(detail => {
        //add the key if it doesn't exist
        if(!errors.hasOwnProperty(detail.path)) {
            errors[detail.path] = detail.message
        }
    });
    console.log(errors);

    // errors[error.details[0].path] = error.details[0].message;

    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //validate
    const errors = this.validate();
    this.setState({ errors: errors || {} })
    if(errors) return;

    // Axios.post(`${process.env.REACT_APP_API_URI}/contacts`, this.state.contact)
    //   .then(res => {
    //     if(res.status === 200) {
    //       //set the jwt in my app (localstorage, cookie, variable)
    //       // localStorage.setItem('token', res.headers['x-auth-token']);
    //       //redirect somewhere
    //       const referer = this.props.location.state;
    //       return this.props.history.push(referer ? referer.from.pathname : '/');
    //     }
    //   })
    //   .catch(error => {

    //   })
    HandleDB.create(this.state.contact, (err, res) => {
      if(err) {
        if(err.status === 400) { //unauthorized
          this.setState({errors: {message: err.data.split(":")[2]}});
        }
        return console.log(err);
      }
      const referer = this.props.location.state;
      return this.props.history.push(referer ? referer.from.pathname : '/');
      // return <Redirect to={referer? referer.from.pathname : '/'} />
    });
  }

  handleChange = (e) => {
    this.setState({errors: {}});

    const {name, value} = e.target;

    const clonedContact = {...this.state.contact};
    
    clonedContact[name] = value;
    
    this.setState({
        contact: clonedContact
    });
  }

  handleNameChange = (e) => {
    this.setState({errors: {}});
        
    const {name, value} = e.target;

    const clonedContact = {...this.state.contact, name: { ...this.state.contact.name}}
    clonedContact.name[name] = value;

    // //update picture automatically
    if(name === 'first') {
      clonedContact.picture = 'https://robohash.org/' + value + '?set=set2';
      if(value === "") {
        clonedContact.picture = 'https://scienceofstocks.com/wp-content/uploads/2014/10/default-img.gif';
      }
    }

    this.setState({
        contact: clonedContact,
    });
  }

  handleAddressChange = (e) => {
    this.setState({errors: {}});
        
    const {name, value} = e.target;

    const clonedContact = {...this.state.contact, address: { ...this.state.contact.address}}
    clonedContact.address[name] = value;

    this.setState({
        contact: clonedContact
    });
  }

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-md-10">
                  <div className="card mb-4 box-shadow">
                    <div className="row justify-content-md-around pb-5">
                      <div className="col-md-4 mt-5 pl-5">
                        <img 
                          className="card-img-top" 
                          // data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                          alt="Thumbnail" 
                          style={{height: 225, width: '100%', display: 'block'}}
                          // src={'https://robohash.org/' + this.props.contact.name.first} //this.props.contact.name.first
                          src={this.state.contact.picture}
                          data-holder-rendered="true" />
                      </div>
                      <div className="card-body col-md-6 pt-5">
                        <div className="row">
                          <div className="col-md-4">
                            <p className="border-right">First Name</p>
                          </div>
                          <div className="col-md-8">
                            <div className="input-group input-group-sm mb-3">
                              <input type="text" className="form-control" name="first" onChange={this.handleNameChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <p className="border-right">Last Name</p>
                          </div>
                          <div className="col-md-8">
                            <div className="input-group input-group-sm mb-3">
                              <input type="text" className="form-control" name="last" onChange={this.handleNameChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <p className="border-right">Relationship</p>
                          </div>
                          <div className="col-md-8">
                            <div className="input-group input-group-sm mb-3">
                              <input type="text" className="form-control" name="relationship" onChange={this.handleChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <p className="border-right">Age</p>
                          </div>
                          <div className="col-md-8">
                            <div className="input-group input-group-sm mb-3">
                              <input type="text" className="form-control" name="age" onChange={this.handleChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <p className="border-right">Email</p>
                          </div>
                          <div className="col-md-8">
                            <div className="input-group input-group-sm mb-3">
                              <input type="text" className="form-control" name="email" onChange={this.handleChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <p className="border-right">Phone</p>
                          </div>
                          <div className="col-md-8">
                            <div className="input-group input-group-sm mb-3">
                              <input type="text" className="form-control" name="phone" onChange={this.handleChange}/>
                            </div>
                          </div>
                        </div>
                      </div>  
                      <div className="col-md-10 border-bottom mb-3">
                        <div className="row">
                          <div className="col-md-4">
                            <p className="">Address</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-4">
                                <p className="border-right">Building</p>
                              </div>
                              <div className="col-md-8">
                                <div className="input-group input-group-sm mb-3">
                                  <input type="text" className="form-control" name="building" onChange={this.handleAddressChange}/>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-4">
                                <p className="border-right">Street</p>
                              </div>
                              <div className="col-md-8">
                                <div className="input-group input-group-sm mb-3">
                                  <input type="text" className="form-control" name="street" onChange={this.handleAddressChange}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-4">
                                <p className="border-right">City</p>
                              </div>
                              <div className="col-md-8">
                                <div className="input-group input-group-sm mb-3">
                                  <input type="text" className="form-control" name="city" onChange={this.handleAddressChange}/>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-4">
                                <p className="border-right">State</p>
                              </div>
                              <div className="col-md-8">
                                <div className="input-group input-group-sm mb-3">
                                  <input type="text" className="form-control" name="state" onChange={this.handleAddressChange}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-4">
                                <p className="border-right">Country</p>
                              </div>
                              <div className="col-md-8">
                                <div className="input-group input-group-sm mb-3">
                                  <input type="text" className="form-control" name="country" onChange={this.handleAddressChange}/>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-4">
                                <p className="border-right">Zip</p>
                              </div>
                              <div className="col-md-8">
                                <div className="input-group input-group-sm mb-3">
                                  <input type="text" className="form-control" name="zip" onChange={this.handleAddressChange}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-2">
                            <p className="border-right">Photo</p>
                          </div>
                          <div className="col-md-10">
                            <div className="input-group input-group-sm mb-3">
                              <input type="text" className="form-control" placeholder={this.state.contact.picture} name="picture" onChange={this.handleChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {Object.keys(this.state.errors).length > 0
                      && 
                      <div className="alert alert-danger mr-3 ml-3">
                          <ul className="pl-3 m-0">
                              {Object.keys(this.state.errors).map((key, index) => {
                                  return <li key={index}>{this.state.errors[key]}</li>
                              })}
                          </ul>
                      </div>
                    }

                    <div className="d-flex justify-content-center align-items-center">
                      <div className="btn">
                          <button type="submit" className="btn btn-sm btn-outline-secondary mr-4">Save</button>
                          {/* <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            <Link to={"/"} style={{ textDecoration: 'none', color: '#6c757d' }}>Cancel</Link>
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
 
export default CreateForm;