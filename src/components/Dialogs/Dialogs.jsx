import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/store";



const Dialogs = (props) => {

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.state.dialogs.map(user => <DialogItem id={user.id} name={user.name} />)}
            </div>
            <div className={classes.messages}>
                {props.state.messages.map(message => <Message message={message.message} />)}
                <textarea onChange={ onMessageChange } value={props.state.newMessageText}/>
                <button onClick={ sendMessage }>Send new message</button>
            </div>
        </div>
    );
};

export default Dialogs;