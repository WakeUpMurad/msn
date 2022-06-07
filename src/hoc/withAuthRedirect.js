import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export const WithAuthRedirect = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (!props.isAuth){
            return navigate("/login");
        }
    },[props.isAuth]);
};

export default WithAuthRedirect;