import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../UI/FormControl/FormControl";

const AddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="newPost">
            <div><Field name={'newPostText'} component={Textarea}
                        validate={[required, maxLengthCreator(10)]} placeholder='Enter new post text'/>
            </div>
            <div><button>Add new post</button></div>
        </form>
    );
};

const AddPostForm = reduxForm({form: 'addPost'})(AddPost)

export default AddPostForm;