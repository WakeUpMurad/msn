import React, {useContext} from 'react';
import LoginReduxForm from "./LoginReduxForm";
import {connect} from "react-redux";
import {logIn} from "../../../redux/reducers/auth-reducer";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../../../context";


const Login = (props) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe);
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
            return <Navigate to="/profile" replace />
        }
    }

    if(isAuth) {
        return <Navigate to="/profile" replace />
    }

    return (
        <div>
            <h1>Login page</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


export default connect(null, {logIn})(Login);