import React from 'react';
import {sendMessage, updateNewMessageText} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;