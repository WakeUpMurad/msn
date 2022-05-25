import React from 'react';
import classes from "./Header.module.css";
import logo from "../../img/RYL_logo.png";

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.headerLogo} src={logo} alt='this is top image'/>
        </header>
    );
};

export default Header;