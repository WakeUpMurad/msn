import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow, toggleFollowingProgress, getUsers} from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../UI/Loader/Loader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);
    }

    render() {
        return <>
                {this.props.isFetching ? <Loader/> : null }
                <Users {...this.props} onPageChanged={this.onPageChanged}/>
            </>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default UsersContainer = connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, getUsers}
)(UsersContainer);
