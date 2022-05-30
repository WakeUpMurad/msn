const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: 
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default: 
            return state;
    }
}
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text,
    })

export default dialogsReducer;