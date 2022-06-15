import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUser, logOut, logIn} from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUser();
        this.props.logOut();
        this.props.logIn();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUser, logOut, logIn})(HeaderContainer);