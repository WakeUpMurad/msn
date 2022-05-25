import React from 'react';

const Post = (props) => {
    return (
        <div>
            <div className="post1">
                {props.message}
            </div>
            <div className="post1">
                Likes {props.likesCount}
            </div>
        </div>
    );
};

export default Post;