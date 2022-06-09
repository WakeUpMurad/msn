import React, {useState} from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
    const [isEdit, setEditMode] = useState(false)
    const [status, changeStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        changeStatus(e.target.value)
    }

    return (
        <div>
            {
                !isEdit
                ? <div>
                        <span onDoubleClick={activateEditMode}>{props.status || 'check status'}</span>
                    </div>
                : <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}/>
            }
        </div>
    );
};

export default ProfileStatus;