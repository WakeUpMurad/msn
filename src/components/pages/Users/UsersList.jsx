import React from 'react';
import classes from './Users.module.css';
import userPhoto from "../../../assets/img/user.png"
import {NavLink} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import {follow, toggleFollowingProgress, unfollow} from "../../../redux/reducers/users-reducer";

const UsersList  = (props) => {
    console.log(props)
    if (!props.users.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Пользователи не найдены!
            </h1>
        )
    }
        return (
            <div>
                <TransitionGroup>
                    {props.users.map(u =>
                            <CSSTransition key={u.id}
                                       timeout={500}
                                       classNames="user"
                            >
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small: userPhoto} className={classes.userPhoto} alt=""/>
                                    </NavLink>
                                    <div>
                                        {u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {props.follow(u.id)}}>Follow</button>
                                        }
                                    </div>
                                    <span>
                                        <div>{u.name}</div>
                                        <div>{u.status}</div>
                                    </span>
                                    <span>
                                        <div>{"u.location.country"}</div>
                                        <div>{"u.location.city"}</div>
                                    </span>
                                </div>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
            </div>
        )
};

const mapStateToProps = (state) => {
    return {
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress})(UsersList);