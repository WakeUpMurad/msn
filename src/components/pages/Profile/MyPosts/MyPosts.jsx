import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm";
import {connect} from "react-redux";
import {addPost} from "../../../../redux/reducers/profile-reducer";

const MyPosts = (props) => {

    const addPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className='myPosts'>
            My Posts
            <AddPostForm onSubmit={addPost} />
            {
                props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

export default connect(mapStateToProps, {addPost})(MyPosts);