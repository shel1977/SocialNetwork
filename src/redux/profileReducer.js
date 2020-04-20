import {profileAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    postData: [
        {id: 1, message: '1st', likes: 5},
        {id: 2, message: '2nd', likes: 8},
        {id: 3, message: '3nd', likes: 9},
        {id: 4, message: '4nd', likes: 2},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.newMyPostMessageBody,
                likes: 0,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };

        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            };

        }
        default:
            return state;
    }
};

export const addPostActionCreator = (newMyPostMessageBody) => ({type: ADD_POST, newMyPostMessageBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => {  //ThunkCreator getProfile
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            });
    }
};

export const getStatus = (userId) => {  //ThunkCreator getStatus
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            });
    }
};

export const updateStatus = (status) => {  //ThunkCreator putStatus
    return (dispatch) => {
        profileAPI.putStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }

            });
    }
};

export default profileReducer;