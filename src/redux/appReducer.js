import {getAuthUserData} from "./authReducer";

const SET_INITIALIZERSUCCESS = 'SET-INITIALIZERSUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZERSUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: SET_INITIALIZERSUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
                                //other promises may bee later
    Promise.all ([promise])
        .then(() => {
        dispatch(initializedSuccess())
    });
};

export default appReducer;