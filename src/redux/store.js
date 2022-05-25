const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: 'It\'s my first post', likesCount: 10},
                {id: 3, message: 'My second post', likesCount: 10},
                {id: 4, message: 'Firth post', likesCount: 10},
                {id: 5, message: 'Yo', likesCount: 10},
            ],
            newPostText: 'DAO-IT.com',
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Самир'},
                {id: 2, name: 'Туран'},
                {id: 3, name: 'Сабина'},
                {id: 4, name: 'Махаббат'},
                {id: 5, name: 'Ханым'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageText: 'Hi',
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if(action.type === ADD_POST) {
            {
                let newPost = {
                    id: 6,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            }
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            }
        } else if(action.type === SEND_MESSAGE) {
            {
                let newMessage = {
                    id: 6,
                    message: this._state.messagesPage.newMessageText,
                }
                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.newMessageText = '';
                this._callSubscriber(this._state);
            }
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            {
                this._state.messagesPage.newMessageText = action.newMessage;
                this._callSubscriber(this._state);
            }
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    })

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text,
    })

export default store;
window.store = store;