import React, {useEffect, useRef, useState} from 'react';
import classes from './Users.module.css';
import {connect} from "react-redux";
import {follow, getUsers, toggleFollowingProgress, unfollow} from "../../../redux/reducers/users-reducer";
import Pagination from "../../UI/Pagination/Pagination";
import {getPageCount} from "../../../utils/page";
import MySelect from "../../UI/MySelect/MySelect";
import UsersList from "./UsersList";
import {useFeatching} from "../../../hooks/useFeatching";
import {usersAPI} from "../../../api/api";
import {useObserver} from "../../../hooks/useObserver";
import Loader from "../../UI/Loader/Loader";

const Users  = (props) => {
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()

    const onPageChanged = (pageNum) => {
        props.getUsers(pageNum, props.pageSize);
        setPage(pageNum)
    }

    const [fetchUsers, isUsersLoading, userError] = useFeatching(async (page, limit) => {
        const response = await usersAPI.getUsers(page, limit);
        const totalCount = response.totalCount;
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isUsersLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchUsers(page, limit)
    }, [page, limit])



    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    }, [])

    let pagesCount = getPageCount(props.totalUsersCount, props.pageSize)

    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
        return <div className='app-wrapper-content'>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Количество элементов на странице'
                options={[
                    {value: 25, name: '25'},
                    {value: 50, name: '50'},
                    {value: 100, name: '100'},
                    {value: -1, name: 'Показать все'},
                ]}
            />
            <Pagination
                page={page}
                changePage={onPageChanged}
                totalPages={totalPages}
            />
            <UsersList users={props.users} />
            <div ref={lastElement} style={{height: 20, background: 'red'}}/>
            {isUsersLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
        </div>
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

export default connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, getUsers})(Users);