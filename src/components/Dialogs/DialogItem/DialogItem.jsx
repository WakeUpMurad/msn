import React from 'react';
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";

const DialogItem = (props) => {
    let url = useLocation();

    return (
        <NavLink to={'/dialogs/'+ props.id}
                 className={({ isActive }) => isActive ? classes.active : classes.dialog}
        >
            {props.name}
        </NavLink>
    );
};

export default DialogItem;