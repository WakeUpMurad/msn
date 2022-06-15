import React from 'react';
import classes from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators";
import {Input} from "../../UI/FormControl/FormControl";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'email'} component={Input} type="text"
                        validate={[required]} placeholder="Enter email"/></div>
            <div><Field name={'password'} component={Input} type="password"
                        validate={[required]} placeholder="Enter password"/></div>
            <div><Field name={'rememberMe'} component={Input} type="checkbox"
                        validate={[required]}/>remember me</div>
            {props.error && <div className={classes.loginError}>{props.error}</div>}
            <div><button>Login</button></div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm;