import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";

const MyPosts = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className='myPosts'>
            My Posts
            <div className="newPost">
                <textarea onChange={onPostChange} value={props.newPostText}/>
                <button onClick={ addPost }>Add new post</button>
            </div>
            {
                props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
            }
        </div>
    );
};

export default MyPosts;