import React from 'react';
import classes from "./Header.module.css";
import logo from "../../assets/img/RYL_logo.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.headerLogo} src={logo} alt='this is top image'/>
            <div className={classes.loginBlock}>
                { props.isAuth ? props.login :
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    );
};

export default Header;