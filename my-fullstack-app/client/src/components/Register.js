import React from 'react';
import { Redirect } from 'react-router-dom'
import auth from '../services/auth';
import '../css/register.css';
import Joi from 'joi-browser';


class Register extends React.Component {
    state = {
        credentials: {
            name: {
                first: '',
                last: ''
            },
            email: '',
            password: '',
        },
        confirmPassword: '',
        passwordConfirmed: true,
        errors: {}
    }

    schema = {
        name: {
            first: Joi.string().max(100).regex(/^[A-Z][a-z]+$/).required().label("First Name")
                    .options({ language: { string: { regex: { base: 'must begin with a capital letter followed by one or more lower case letters.' } } } }),
            last: Joi.string().regex(/^[A-Z][a-z]+$/).required().label("Last Name")
                    .options({ language: { string: { regex: { base: 'must begin with a capital letter followed by one or more lower case letters.' } } } })
          },
          email: Joi.string().email().required().label("Email Address"),
          password: Joi.string().required().label("Password")
    }

    validate = () => {
        const {error} = Joi.validate(this.state.credentials, this.schema, {abortEarly: false});
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

        if (this.state.credentials.password !== this.state.confirmPassword) {
            this.setState({
                confirmPassword: '',  
                passwordConfirmed : false
            });
            console.log('error');
            return;
        }

        this.setState({
            passwordConfirmed : true
        });
        

        auth.register(this.state.credentials, (err, res) => {
            if(err) {
                if(err.status === 400) { //unauthorized
                    this.setState({errors: {message: err.data}});
                }
                return console.log(err);
            }
            this.props.checkAuth();
            return this.props.history.push('/');
        });
    };

    handleChange = (e) => {
        this.setState({errors: {}});

        const {name, value} = e.target;

        const clonedCredentials = {...this.state.credentials};
        clonedCredentials[name] = value;

        this.setState({
            credentials: clonedCredentials
        })
    }

    handlePasswordChange = (e) => {
        this.setState({errors: {}});

        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    handleNameChange = (e) => {
        this.setState({errors: {}});
        
        const {name, value} = e.target;

        const clonedCredentials = {...this.state.credentials, name: { ...this.state.credentials.name}}
        clonedCredentials.name[name] = value;

        this.setState({
            credentials: clonedCredentials
        });
    }

    render() {
        return ( 
            auth.isAuthenticated() ? 
            <Redirect to='/' /> 
            : 
            <>
                <form className="form-register" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal text-center">Registration</h1>
                    {/* first_name */}
                    <label htmlFor="first" className="sr-only">First Name</label>
                    <input 
                        type="text" 
                        id="first"
                        name="first"
                        className="form-control" 
                        placeholder="First name" 
                        onChange={this.handleNameChange} 
                        autoFocus 
                    />
                    {/* last name */}
                    <label htmlFor="last" className="sr-only">Last Name</label>
                    <input 
                        type="text" 
                        id="last"
                        name="last"
                        className="form-control mt-3" 
                        placeholder="Last name" 
                        onChange={this.handleNameChange} 
                        autoFocus 
                    />
                    {/* email */}
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input 
                        type="text" 
                        id="email"
                        name="email"
                        className="form-control mt-3" 
                        placeholder="Email" 
                        onChange={this.handleChange} 
                        autoFocus 
                    />
                    {/* password */}
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        className="form-control mt-3"
                        placeholder="Password"
                        style={ this.state.passwordConfirmed ? {} : { border:'1px solid red' } }
                        onChange={this.handleChange} 
                    />
                    {/* confirm password */}
                    <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control mt-3"
                        placeholder={ this.state.passwordConfirmed ? "Confirm Password" : "Password does not match."}
                        style={ this.state.passwordConfirmed ? {} : { border: '1px solid red' } }
                        // style = {{ this.state.passwordConfirmed ? null : 'border : "1px solid red", ::placeholder { color: "red"}' }}
                        onChange={this.handlePasswordChange}
                        value={ this.state.confirmPassword }
                    />
                    <button 
                        className="btn btn-lg btn-primary btn-block mt-5" 
                        type="submit"
                        >Register</button>

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
 
export default Register;