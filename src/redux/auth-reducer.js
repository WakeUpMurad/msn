import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}
export const setAuthsUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: {userId, login, email} })

export const getAuthUser = () => {
    return (dispatch) => {
        authAPI.getAuthUser()
            .then(data => {
                if(data.resultCode === 0) {
                    let { id, login, email } = data.data;
                    dispatch(setAuthsUserData(id, login, email));
                }
            }).catch(err => console.log(err))
    }
}



export default authReducer;