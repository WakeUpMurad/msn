import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../UI/FormControl/FormControl";

const AddMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'newMessageText'} component={Textarea}
                        validate={[required, maxLengthCreator(100)]} placeholder='Enter your message'/>
            </div>
            <div><button>Send new message</button></div>
        </form>
    );
};

const AddMessageForm = reduxForm({form: 'addMessage'})(AddMessage)

export default AddMessageForm;