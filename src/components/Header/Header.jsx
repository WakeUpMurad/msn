import React, {useContext} from 'react';
import classes from "./Header.module.css";
import logo from "../../assets/img/RYL_logo.png";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../redux/reducers/auth-reducer";
import {AuthContext} from "../../context";

const Header = (props) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        props.logOut();
        setIsAuth(false);
    }

    return (
        <header className={classes.header}>
            <img className={classes.headerLogo} src={logo} alt='this is top image'/>
            <div className={classes.loginBlock}>
                { isAuth
                    ? <div>{props.login} - <button onClick={logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    login: state.auth.login,
})

export default connect(mapStateToProps, {logOut})(Header);