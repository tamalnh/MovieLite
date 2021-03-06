import { SET_CURRENT_USER } from '../action/types.action';
import isEmpty from '../../components/validation/is-empty';

const initialState = {
    user: {},
    isAuthenticated: false
}

export default function(state=initialState, action){
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
    
        default:
            return state
    }
}