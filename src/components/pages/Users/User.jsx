import React from 'react';
import classes from './Users.module.css';
import userPhoto from "../../../assets/img/user.png"
import {NavLink} from "react-router-dom";

const User  = ({follow, followingInProgress, unfollow, user}) => {

    return (
        <div className={classes.user}>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small: userPhoto} className={classes.userPhoto} alt=""/>
            </NavLink>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>
            <div>
                {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {unfollow(user.id)}}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {follow(user.id)}}>Follow</button>
                }
            </div>

        </div>
        )

}


export default User;
