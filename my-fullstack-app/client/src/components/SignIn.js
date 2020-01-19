import React from 'react';
import { Redirect } from 'react-router-dom';
import '../css/signin.css';
import auth from '../services/auth';
import Joi from 'joi-browser';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                email: '',
                password: ''
            },
            errors: {},
        }
    }

    schema = {
        email: Joi.string().email().required().label("Email Address"),
        password: Joi.string().required().label("Password")
    }

    validate = () => {
        const {error} = Joi.validate(this.state.credentials, this.schema, {abortEarly: false}); //abortEarly -> to use both email & password 
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
        // this.setState({ errors }); // same with this.setState({ errors: errors });
        this.setState({ errors: errors || {} }) // if error is null -> state will be {}
        if(errors) return;

        auth.login(this.state.credentials, (err, res) => {
            if(err) {
                if(err.status === 401) { //unauthorized
                    this.setState({errors: {message: "Invalid Login"}});
                }
                return console.log(err);
            }
            // auth.updateState();
            this.props.checkAuth();
            const referer = this.props.location.state;
            return this.props.history.push(referer ? referer.from.pathname : '/');
            // return <Redirect to={referer? referer.from.pathname : '/'} />
        });
        
        // // send state to the api
        // Axios.post(`${process.env.REACT_APP_API_URI}/users/login`,
        //             this.state.credentials)
        //     .then(res => {
        //         if(res.status == 200) {
        //             auth.login(res, () => {
        //                 //set the jwt in my app (localstorage, cookie, variable)
        //                 // localStorage.setItem('token', res.headers['x-auth-token']);
        //                 //redirect somewhere
        //                 if(!this.props.location.state) {
        //                     return this.props.history.push('/');
        //                 } else {
        //                     return this.props.history.push(this.props.location.state.from.pathname);
        //                 }
        //             });
        //         }

        //         else if(res.status == 401) {
        //             // handle error
        //             this.setState({ errors: { "message": "Invalid Login"} });
        //         }
        //     })
        //     .catch(err => {
        //     });
            
        // fetch('/api/users/login',
        //     {
        //         method: 'post',
        //         header: {
        //             'Accept': 'application/json, text/plain, */*',
        //             'Content-Type': 'application.json'
        //         },
        //         // body: JSON.stringify(this.state)
        //         body: {	
        //             "password": "1234",
        //             "email": "w0419410@nscc2.ca"
        //         }
        //     }
        // )
        };

    handleChange = (e) => {
        this.setState({errors: {}});

        const {name, value} = e.target;

        const clonedCredentials = {...this.state.credentials}
        clonedCredentials[name] = value;

        this.setState({
            credentials: clonedCredentials
        })
    }

    render() {
        return ( 
            auth.isAuthenticated() ? 
            <Redirect to='/' /> 
            : 
            <>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input 
                        type="text" 
                        id="inputEmail"
                        name="email"
                        className="form-control" 
                        placeholder="Email address" 
                        onChange={this.handleChange} 
                        autoFocus 
                    />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input 
                        type="password" 
                        id="inputPassword"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.handleChange} 
                    />
                    <button 
                        className="btn btn-lg btn-primary btn-block" 
                        type="submit"
                        >Sign in</button>
                
                    {Object.keys(this.state.errors).length > 0
                        && 
                        <div className="alert alert-danger mt-5">
                            <ul className="pl-3 m-0">
                                {Object.keys(this.state.errors).map((key, index) => {
                                    return <li key={index}>{this.state.errors[key]}</li>
                                })}
                            </ul>
                        </div>
                    }
                </form>
            </>
         );
    }
}
 
export default SignIn;