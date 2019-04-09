import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import setAuthToken from '../utils/setAuthToken';
import store from './../store';
import { setCurrentUser, logoutUser  } from '../store/action/auth.action';

import { Header, Footer, Movies, SortNav, SingleMovie, Login, Register,Bookmark, NoMatch } from './layouts';

import './App.css';


if(localStorage.jwtToken){// check for token
  setAuthToken(localStorage.jwtToken)//set token to auth header
  const decoded = jwtDecode(localStorage.jwtToken) //decode token
  store.dispatch(setCurrentUser(decoded))//dispatch setCurrentUser


  //if token expired
 const currentTime = Date.now() / 1000;
 if(decoded.exp < currentTime) {
   //logout user
   store.dispatch(logoutUser());

 }

}





class App extends Component {


  render() {    
    
    return (
      <Provider store={store}>
        <BrowserRouter> 
            <div className="App">
              <Header />
              <SortNav />
              <Route exact path="/" component={Movies} />
              <Route path="/movie/:id" component={SingleMovie} />
              <Route path="/movie/bookmarked" component={Bookmark} />
              <Route path="/signin" component={Login} />
              <Route path="/signup" component={Register} />
              <Footer />
            </div> 
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
