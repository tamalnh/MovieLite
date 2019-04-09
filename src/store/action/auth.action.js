import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER, GET_ERRORS } from './types.action';
import setAuthToken from '../../utils/setAuthToken';

const BASE_URL = "http://localhost:5000"


export const registerUser = (user, history) => dispatch => {
    axios.post(`${BASE_URL}/api/user/register`, user)
        .then(res => {
            history.push('/signin')
            
        })
        .catch(err => {        
            console.log(err); 
                 
            // dispatch({
            //     type:GET_ERRORS,
            //     payload:err.response.data
            // })
        })
}

export const signInUser = (user, history) => dispatch => {
    axios.post(`${BASE_URL}/api/user/signin`, user)
        .then(res => {

            const {token} = res.data;//collect token

            localStorage.setItem('jwtToken', token)//save token to localStorage

            setAuthToken(token);//pass token to auth header

            const decoded = jwtDecode(token)//decode user from token

            dispatch(setCurrentUser(decoded))//dispatch setCurrentUserFunc
            
            history.push('/');


            
        })
        .catch(err => { 
            console.log(err);
            
            // dispatch({
            //     type: GET_ERRORS,
            //     payload: err.response.data
            // })
        })
}

export const setCurrentUser = user => dispatch => {
    dispatch({
        type: SET_CURRENT_USER,
        payload: user
    })
}


export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken')//remove token from localStorage
    setAuthToken(false);//pass falsy value to auth header
    dispatch(setCurrentUser({}))// dispatch setCurrentUser as an empty object

    window.location.href = '/';
}