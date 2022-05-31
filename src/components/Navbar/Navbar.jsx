import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.navbar} >
            <ul>
                <li>
                    <NavLink to="/profile" className={({ isActive }) =>
                    isActive ? classes.active : classes.link}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" className={({ isActive }) => isActive ? classes.active : classes.link}>
                        Massages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={({ isActive }) => isActive ? classes.active : classes.link}>
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news" className={({ isActive }) => isActive ? classes.active : classes.link}>
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/music" className={({ isActive }) => isActive ? classes.active : classes.link}>
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={({ isActive }) => isActive ? classes.active : classes.link}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;