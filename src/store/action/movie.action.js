import axios from 'axios';
import { GET_INITIAL_MOVIES, GET_SEARCH_MOVIE, GET_SEARCHED_MOVIE_DESC, GET_ALL_BOOKMARK_MOVIE } from '../action/types.action';

const BASE_URL = 'http://localhost:5000'
const MOVIE_URL = 'http://localhost:5000/'
const API_KEY = 'e65433e0';

export const getInitialMovieToShowHomepage = () => dispatch => { 

    axios(`${BASE_URL}/api/movie`)
        .then(({data: {data}}) => {
            // console.log(data.Search);
            
            dispatch({
                type: GET_INITIAL_MOVIES,
                payload: data.Search  
            }) 
        })
        .catch(err => {
            console.log(err);
            
        })
}

export const getMovieBySearch = keyword => dispatch => {
    axios.get(`${BASE_URL}/api/movie/search/${keyword}`)
        .then(({data: {data}}) => {
            dispatch({
                type: GET_SEARCH_MOVIE,
                payload: data.Search
            })
            
        })
        .catch(err => {
            console.log(err);
            
        })
}


export const getSearchMovieItemDesc = id => dispatch => {
    axios.get(`${BASE_URL}/api/movie/${id}`)
        .then(({data: {data} }) => {             
            dispatch({
                type: GET_SEARCHED_MOVIE_DESC,
                payload: data
            })
            
        })
        .catch(err => {
            console.log(err);
            
        })
}


export const addMovieToBookmark = id => dispatch => {
    axios.post(`${BASE_URL}/api/movie/bookmark/${id}`)
}

export const getAllBookmarkedMovie = () => dispatch => {
    const token = localStorage.getItem('jwtToken')

    axios.get(`${BASE_URL}/api/movie/bookmarked`, {
        headers: {
            'Authorization': token
        }
    })
    .then(res => {
        dispatch({
            type: GET_ALL_BOOKMARK_MOVIE,
            payload: res.data
        })
        
    })
    .catch(err => {
        console.log(err);
        
    })
}
