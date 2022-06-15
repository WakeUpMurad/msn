import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}
export const setAuthsUserData = (userId, login, email) => ({ type: SET_USER_DATA, payload: {userId, login, email} })

export const getAuthUser = () => (dispatch) => {
    return authAPI.getAuthUser()
        .then(data => {
            if(data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthsUserData(id, login, email));
                localStorage.setItem('auth', 'true')
            }
        }).catch(err => console.log(err))
}

export const logIn = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if(data.resultCode === 0) {
                return  dispatch(getAuthUser());
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}))
            }
        }).catch(err => console.log(err))
}

export const logOut = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setAuthsUserData(null, null, null));
                localStorage.removeItem('auth')
            }
        }).catch(err => console.log(err))
}


export default authReducer;