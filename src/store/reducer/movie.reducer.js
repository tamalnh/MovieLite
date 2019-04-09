import { GET_INITIAL_MOVIES, GET_SEARCH_MOVIE, GET_SEARCHED_MOVIE_DESC, GET_ALL_BOOKMARK_MOVIE } from '../action/types.action';

const initialState = {
    movies: {}, 
    isLoading: false
}

export default function(state=initialState, action){
    switch (action.type) {
        case GET_INITIAL_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        
        case GET_SEARCH_MOVIE:
            return {
                ...state,
                searchMovie: action.payload
            }
        case GET_SEARCHED_MOVIE_DESC: 
            return {
                ...state,
                selectedMovie: action.payload
            }
        case GET_ALL_BOOKMARK_MOVIE:
            return{
                ...state,
                bookmarkedMovie: action.payload
            }
        

        default:
            return state;
    }
}