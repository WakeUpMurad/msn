import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
        dialogsPage: {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;