import React, {useContext} from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";
import {AuthContext} from "../../context";

const Navbar = (props) => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <nav className={classes.navbar} >
            <div className={classes.navbar__links}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? `${classes.navbar__link} ${classes.link__active}` : classes.navbar__link}>Profile</NavLink>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? `${classes.navbar__link} ${classes.link__active}` : classes.navbar__link}>Massages</NavLink>
                <NavLink to="/users" className={({ isActive }) => isActive ? `${classes.navbar__link} ${classes.link__active}` : classes.navbar__link}>Users</NavLink>
                <NavLink to="/news" className={({ isActive }) => isActive ? `${classes.navbar__link} ${classes.link__active}` : classes.navbar__link}>News</NavLink>
                <NavLink to="/music" className={({ isActive }) => isActive ? `${classes.navbar__link} ${classes.link__active}` : classes.navbar__link}>Music</NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? `${classes.navbar__link} ${classes.link__active}` : classes.navbar__link}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
