const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post', likesCount: 10},
        {id: 3, message: 'My second post', likesCount: 10},
        {id: 4, message: 'Firth post', likesCount: 10},
        {id: 5, message: 'Yo', likesCount: 10},
    ],
    newPostText: 'DAO-IT.com',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    })

export default profileReducer;