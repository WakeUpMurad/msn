import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.dialogsPage.dialogs.map(user => <DialogItem id={user.id} name={user.name} key={user.id}/>)}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id}/>)}
                <textarea onChange={ onMessageChange } value={props.dialogsPage.newMessageText} placeholder='Enter your message'/>
                <button onClick={ onSendMessage }>Send new message</button>
            </div>
        </div>
    );
};

export default Dialogs;