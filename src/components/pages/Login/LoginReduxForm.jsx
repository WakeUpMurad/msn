import React from 'react';
import classes from "./Login.module.css";
import {reduxForm} from "redux-form";
import {required} from "../../../utils/validators";
import {createField, Input} from "../../UI/FormControl/FormControl";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            {error && <div className={classes.loginError}>{error}</div>}
            <div><button>Login</button></div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm;
