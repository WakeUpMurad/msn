/*

let rerenderEntireTree = () => {
    console.log('state changed')
}
let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first post', likesCount: 10},
            {id: 3, message: 'My second post', likesCount: 10},
            {id: 4, message: 'Firth post', likesCount: 10},
            {id: 5, message: 'Yo', likesCount: 10},
        ],
        newPostText: 'DAO-IT.com'
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
        newMessageText: 'Hi'
    },
}

export const addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const sendMessage = () => {
    let newMessage = {
        id: 6,
        message: state.messagesPage.newMessageText,
    }
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree();
}

export const updateNewMessageText = (newMessage) => {
    state.messagesPage.newMessageText = newMessage;
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}



export default state;*/
