import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { signInUser } from '../../store/action/auth.action';


import './auth.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
             
         }
    }


    inputhandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })

    }

    submitFromHandler = event => {
        event.preventDefault();

        let user  = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.signInUser(user, this.props.history);
    }

    componentDidMount(){
        const {isAuthenticated} = this.props.user
        if(isAuthenticated){
            this.props.history.push('/');
        }
        
    }


    render() { 

        const {errors} = this.props

        return ( 
            <div className="login-slide  margin-top">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-sm-12 text-center">
                            <h2 className="display-4 text-dark">Signin to MovieLight</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-sm-2 col-sm-8">
                            <form className="form-group" onSubmit={(e) => this.submitFromHandler(e)}>
                                <input 
                                    type="text" 
                                    name="email" 
                                    className="form-control mb-3" 
                                    placeholder="type your email....." 
                                    value={this.state.email}
                                    onChange={e => this.inputhandler(e)}/>

                                {errors.email && ( <p className="text-danger"> {errors.email} </p>)}

                                <input 
                                    type="password" 
                                    name="password" 
                                    className="form-control mb-3" 
                                    placeholder="type your passowrd....." 
                                    value={this.state.passowrd}
                                    onChange={e => this.inputhandler(e)}/>

                                {errors.password && ( <p className="text-danger"> {errors.password} </p>)}
                                {errors.message && ( <p className="text-danger"> {errors.message} </p>)}

                                <button className="btn btn-dark float-right"> Signin </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}


Login.propTypes = {
    signInUser: propTypes.func.isRequired,
    errors: propTypes.object.isRequired
}

const mapStateToProps = state => {    
      
    return {
        user: state.user,
        errors: state.error
    }
}

 
export default connect(mapStateToProps, {signInUser})(Login);