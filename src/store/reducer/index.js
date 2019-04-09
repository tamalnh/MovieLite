import {combineReducers} from 'redux';
import movieReducer from './movie.reducer';
import userReducer from './auth.reducer';
import errorReducer from './error.reducer';
const rootReducer = combineReducers({
    movies: movieReducer,
    user: userReducer,
    error: errorReducer
})

export default rootReducer;