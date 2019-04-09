import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        const { user, isAuthenticated} = this.props.user 
        

        const authLink = (
            <ul className="header-nav"> 
                <li> <Link to="/signup"><i className="fas fa-heart"></i>   Bookmarks</Link> </li>
                <li>
                    <Link to="/signin">  <i className="fas fa-sign-out-alt"></i> signout</Link> 
                </li>
                <li className="avatar">
                    <span to="/signup" className="btn disabled text-light"><i className="fas fa-user-tie"></i> {user.name}</span>
                </li>
            </ul>
        )

        const guestLink = (
            <ul className="header-nav">
                <li> <Link to="/signin">signin</Link> </li>
                <li> <Link to="/signup">signup</Link> </li>
            </ul>
        )


        return (

            <div className="header-slide">
                <div className="header-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <Link to="/" className="logo">MovieLite</Link>
                            </div>

                            <div className="offset-sm-3 col-sm-6 text-right">
                        {isAuthenticated ? authLink : guestLink}
                                {/* <ul className="header-nav">
                                    <li> <Link to="/signin">signin</Link> </li>
                                    <li> <Link to="/signup">signup</Link> </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => { 
    
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);