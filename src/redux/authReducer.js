import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    users: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payLoad,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payLoad:
        {userId, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0){
                console.log(response.data)
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email,login, true))
            }
        })
};

export const login = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe )
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error';
                dispatch(stopSubmit('login', {_error: message}));
            }
        })
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
};


export default authReducer;