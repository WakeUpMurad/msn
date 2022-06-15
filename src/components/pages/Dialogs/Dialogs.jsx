import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";
import {connect} from "react-redux";
import {sendMessage} from "../../../redux/reducers/dialogs-reducer";

const Dialogs = (props) => {

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.dialogsPage.dialogs.map(user => <DialogItem id={user.id} name={user.name} key={user.id}/>)}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id}/>)}
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default connect(mapStateToProps, {sendMessage})(Dialogs);