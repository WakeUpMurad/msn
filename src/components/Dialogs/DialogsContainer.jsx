import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsReducer;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (<Dialogs sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} state={state}/>);
};

export default DialogsContainer;