import React from 'react';
import {IPost} from "../models";

interface PostsProps {
   post: IPost
}

const PostList = ({post}: PostsProps) => {
    return (
        <div>
            <h3>{post.number} {post.name}</h3>
            <a href={post.url}>{post.url}</a>
        </div>
    );
};

export default PostList;
