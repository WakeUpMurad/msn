import React from 'react';
import classes  from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const Profile = (props) => {
    withAuthRedirect(props);

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;