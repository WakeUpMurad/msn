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

export const getAuthUser = () => async (dispatch) => {
  const data = await authAPI.getAuthUser();

  if(data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuthsUserData(id, login, email));
      localStorage.setItem('auth', 'true')
  }
}

export const logIn = (email, password, rememberMe) => async (dispatch) => {
  const responseData = await authAPI.login(email, password, rememberMe);

  if (responseData.resultCode === 0) {
    return dispatch(getAuthUser());
  } else {
    let message = responseData.messages.length > 0 ? responseData.messages[0] : 'Some error';
    dispatch(stopSubmit('login', {_error: message}))
  }
}
export const logOut = () => async (dispatch) => {
  const responseData = await authAPI.logout();

  if(responseData.resultCode === 0) {
    dispatch(setAuthsUserData(null, null, null));
    localStorage.removeItem('auth')
  }
}


export default authReducer;
