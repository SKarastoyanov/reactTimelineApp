import {LOGIN, LOGOUT} from '../actions/authentication'

const initialState = {
    isLoged: false
};

const authenticationReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            debugger
            return {
                ...state,
                isLoged: true 
            }
        case LOGOUT:
            return {
                ...state,
                isLoged: false 
            }   
        default:
            return state;
    }
}

export default authenticationReducer;