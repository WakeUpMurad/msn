import React, {useEffect, useState} from 'react';
import classes from './Users.module.css';
import {connect} from "react-redux";
import {follow, requestUsers, toggleFollowingProgress, unfollow} from "../../../redux/reducers/users-reducer";
import Pagination from "../../UI/Pagination/Pagination";
import MySelect from "../../UI/MySelect/MySelect";
import UsersList from "./UsersList";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../redux/selectors";

const Users  = ({users, currentPage, isFetching, pageSize, totalUsersCount, requestUsers, followingInProgress, follow, unfollow}) => {
    const [limit, setLimit] = useState(pageSize)
    const [page, setPage] = useState(currentPage)

    const onPageChanged = (page) => {
        requestUsers(page, limit);
        setPage(page)
    }

    useEffect(() => {
        requestUsers(page, limit);
    }, [limit])

        return <div>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Количество элементов на странице'
                options={[
                    {value: 10, name: '10'},
                    {value: 50, name: '50'},
                    {value: 100, name: '100'},
                ]}
            />
            <Pagination
                page={page}
                changePage={onPageChanged}
                limit={limit}
                totalItemsCount={totalUsersCount}

            />
            <UsersList users={users} follow={follow} unfollow={unfollow} followingInProgress={followingInProgress}/>

            <Pagination
                page={page}
                changePage={onPageChanged}
                limit={limit}
                totalCount={totalUsersCount}
            />
        </div>
}
const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, requestUsers})(Users);
