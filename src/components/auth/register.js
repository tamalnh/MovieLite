import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {registerUser} from '../../store/action/auth.action';


import './auth.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    formSubmitHandler = event => {
        event.preventDefault();
        // console.log(this.state);
        const {name, email, password, confirmPassword} = this.state;
        let newUser = {
            name,
            email,
            password,
            confirmPassword
            
        }
        this.props.registerUser(newUser, this.props.history);
         
    }

    inputHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    componentDidMount(){
        const {isAuthenticated} = this.props.user
        if(isAuthenticated){
            this.props.history.push('/');
        }
        
    }


    render() {
        // console.log(this.props);
        
        const {errors} = this.props;         

        return (
            <div className="register-slide margin-top">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-sm-12 text-center">
                            <h2 className="display-4 text-dark">Signup to MovieLight</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-sm-2 col-sm-8">
                            <form className="form-group" onSubmit={this.formSubmitHandler}>
                                <input 
                                    type="text" name="name" 
                                    className="form-control mb-3" 
                                    placeholder="type your name....." 
                                    value={this.state.name}
                                    onChange={this.inputHandler} />

                                    {errors.name && ( <p className="text-danger"> {errors.name} </p>)}

                                <input 
                                    type="email" name="email" 
                                    className="form-control mb-3" 
                                    placeholder="type your email....." 
                                    value={this.state.email}
                                    onChange={this.inputHandler} />
                                    
                                    {errors.email && ( <p className="text-danger"> {errors.email} </p>)}
                                    {errors.message && ( <p className="text-danger"> {errors.message} </p>)}

                                <input 
                                    type="password" name="password" 
                                    className="form-control mb-3" 
                                    placeholder="type your passowrd....." 
                                    value={this.state.passowrd}
                                    onChange={this.inputHandler} />
                                    
                                    {errors.passowrd && ( <p className="text-danger"> {errors.passowrd} </p>)}

                                <input 
                                    type="password" name="confirmPassword" 
                                    className="form-control mb-2" 
                                    placeholder="confirm passowrd....." 
                                    value={this.state.confirmPassword}
                                    onChange={this.inputHandler} />
                                    
                                    {errors.confirmPassword && ( <p className="text-danger"> {errors.confirmPassword} </p>)}


                                <button className="btn btn-dark float-right"> Signup </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: propTypes.func.isRequired,
    user: propTypes.object.isRequired,
    errors: propTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        user: state.user,
        errors: state.error
    }
}

export default connect(mapStateToProps, {registerUser})(Register);