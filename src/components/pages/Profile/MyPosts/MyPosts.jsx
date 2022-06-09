import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className='myPosts'>
            My Posts
            <div className="newPost">
                <textarea onChange={ onPostChange } value={props.newPostText}/>
                <button onClick={ onAddPost }>Add new post</button>
            </div>
            {
                props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)
            }
        </div>
    );
};

export default MyPosts;