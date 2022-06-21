import React from 'react';
import classes from './Users.module.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Loader from "../../UI/Loader/Loader";
import User from "./User";

const UsersList  = ({users, followingInProgress, follow, unfollow}) => {
    if (!users.length) {
        return (
            <Loader />
        )
    }
        return (
            <div>
                <TransitionGroup>
                    {users.map(user =>
                            <CSSTransition key={user.id}
                                       timeout={500}
                                       classNames="user"
                            >
                               <User user={user} follow={follow} unfollow={unfollow}  followingInProgress={followingInProgress}/>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
            </div>
        )
};


export default UsersList;
