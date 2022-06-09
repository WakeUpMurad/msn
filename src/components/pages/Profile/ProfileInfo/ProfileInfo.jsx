import React from 'react';
import classes from "./ProfileInfo.module.css";
import Loader from "../../../UI/Loader/Loader";
import userPhoto from "../../../../assets/img/user.png"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Loader/>
    }
    return (
        <div>
            Page body
            <div className={classes.profile}>
                <img className={classes.profilePhoto} src={props.profile.photos.large || userPhoto} alt='img'/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} setStatus={props.setStatus}/>
            </div>
            <div className="profileFullName">
                {props.profile.fullName}
            </div>
            <div className='aboutMe'>
                {props.profile.aboutMe}
            </div>
            <div className='contacts'>
            </div>
        </div>
    );
};

export default ProfileInfo;