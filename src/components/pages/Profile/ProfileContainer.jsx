import React from 'react';
import {connect} from "react-redux";
import {
    addPost,
    updateNewPostText,
    getUserProfile,
    getUserStatus,
    updateStatus, setStatus
} from "../../../redux/reducers/profile-reducer";
import Loader from "../../UI/Loader/Loader";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = global.location.pathname.substr(9);
        this.props.getUserProfile(userId || 24343);
        this.props.getUserStatus(userId || 24343);
    }
    render() {
        return <>
            {this.props.isFetching ? <Loader/> : null}
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        isFetching: state.profilePage.isFetching,
    }
}

export default ProfileContainer = connect(mapStateToProps, {addPost, updateNewPostText, getUserProfile, getUserStatus, updateStatus })(ProfileContainer);
