import React, {useEffect} from 'react';
import classes  from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {addPost, getUserProfile, getUserStatus, updateStatus} from "../../../redux/reducers/profile-reducer";
import Loader from "../../UI/Loader/Loader";

const Profile = (props) => {

    useEffect(() => {
        let userId = global.location.pathname.substr(9);
        if(!userId && props.isAuth) {
            userId = props.userId
        }
        props.getUserProfile(userId || props.userId );
    }, [])

    return (
        <div>
            {props.isFetching
                ? <Loader/>
                : <>
                    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                                 setStatus={props.setStatus}/>
                    <MyPosts store={props.store}/>
                </>
            }
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        isFetching: state.profilePage.isFetching,
    }
}

export default connect(mapStateToProps, {addPost, getUserProfile, getUserStatus, updateStatus})(Profile);