import React from 'react';
import {connect} from "react-redux";
import {addPost, updateNewPostText, getUserProfile } from "../../redux/profile-reducer";
import Loader from "../UI/Loader/Loader";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = global.location.pathname.substr(9);
        this.props.getUserProfile(userId);
    }
    render() {
        return <>
            {this.props.isFetching ? <Loader/> : null}
            <Profile {...this.props} profile={this.props.profile}/>

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        isFetching: state.profilePage.isFetching,
    }
}

export default ProfileContainer = connect(mapStateToProps, {addPost, updateNewPostText, getUserProfile })(ProfileContainer);
