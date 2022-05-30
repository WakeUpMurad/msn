import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState().profileReducer;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());

    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts={state.posts}
            newPostText={state.newPostText}
        />
    )
};

export default MyPostsContainer;