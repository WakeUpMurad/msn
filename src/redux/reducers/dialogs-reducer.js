const SEND_MESSAGE = 'SEND-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };

        default: 
            return state;
    }
}
export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;