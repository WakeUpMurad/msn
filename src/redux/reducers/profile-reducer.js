import {profileAPI} from "../../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const ADD_POST = 'ADD-POST';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    profile: null,
    status: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post', likesCount: 10},
        {id: 3, message: 'My second post', likesCount: 10},
        {id: 4, message: 'Firth post', likesCount: 10},
        {id: 5, message: 'Yo', likesCount: 10},
    ],
    toggleIsFetching: true,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS:
            return {...state, status: action.status}

        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0,
            };
            return {...state, newPostText: '', posts: [...state.posts, newPost]};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })


export const getUserProfile = (userId) => async (dispatch) => {

  dispatch(toggleIsFetching(true));
  const responseData = await profileAPI.getUserProfile(userId);

  dispatch(setUserProfile(responseData));
  dispatch(toggleIsFetching(false));
}
export const getUserStatus = (userId) => async (dispatch) => {
  const responseData = await profileAPI.getUserStatus(userId);
  dispatch(setStatus(responseData));
}
export const updateStatus = (status) => async (dispatch) => {

  const responseData = await profileAPI.updateStatus(status);
  if(responseData.resultCode === 0) {
      dispatch(setStatus(status));
  }
}


export default profileReducer;
