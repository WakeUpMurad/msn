import {profileAPI} from "../api/api";
import {setCurrentPage, setUsers, setUsersCount} from "./users-reducer";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post', likesCount: 10},
        {id: 3, message: 'My second post', likesCount: 10},
        {id: 4, message: 'Firth post', likesCount: 10},
        {id: 5, message: 'Yo', likesCount: 10},
    ],
    newPostText: 'DAO-IT.com',
    toggleIsFetching: true,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            };
            return {...state, newPostText: '', posts: [...state.posts, newPost]};

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })


export const getUserProfile = (userId) => {
    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
            dispatch(toggleIsFetching(false));
        }).catch(err => console.log(err));
    }
}

export default profileReducer;