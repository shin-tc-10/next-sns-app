import React from 'react';
import Link from 'next/link';
import { PostType } from '@/types';

type Props = {
    post: PostType;
}

const Post = (props: Props) => {
    const { post } = props;

    return (
        <div className="my-10">
            <div>
                <div>
                    <Link href={`/profile/${post.authorId}`} >
                        <img src={post.author.profile?.profileImageUrl} alt="User Avatar" />
                    </Link>
                </div>
                <div>
                    <h2>{post.author?.username}</h2>
                    <p>{new Date(post.createdAt).toLocaleString()}</p>
                </div>
            </div>
            <p>{post.content}</p>
        </div>
    )
}

export default Post
