import React from 'react';
import Link from 'next/link';
import { PostType } from '@/types';

type Props = {
    post: PostType;
}

const Post = (props: Props) => {
    const { post } = props;

    return (
        <div className="my-10 shadow-md w-96 bg-white">
            <div className="flex p-2">
                <div className="flex p-1">
                    <Link href={`/profile/${post.authorId}`} >
                        <img src={post.author.profile?.profileImageUrl} alt="User Avatar" className="rounded-full" />
                    </Link>
                </div>
                <div className="p-1">
                    <p>投稿者名：{post.author?.username}</p>
                    <p>投稿日時：{new Date(post.createdAt).toLocaleString()}</p>
                </div>
            </div>
            <div className="p-5">
                <p>{post.content}</p>
            </div>
        </div>
    )
}

export default Post
