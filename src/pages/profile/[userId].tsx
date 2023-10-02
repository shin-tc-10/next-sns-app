import apiClient from '@/lib/apiClient';
import { PostType, Profile } from '@/types';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from "react";

type Props = {
    profile: Profile;
    posts: PostType[];
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const { userId } = context.query;

    try {
        const profileResponse = await apiClient.get(`/users/profile/${userId}`);
        const postsResponse = await apiClient.get(`/posts/${userId}`)

        return {
            props: {
                profile: profileResponse.data,
                posts: postsResponse.data,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            notFound: true,
        };
    };
}

const UserProfile = ({ profile, posts }: Props) => {
    const [latestPosts, setLatestPosts] = useState<any[]>([]);

    const onDelete = async (e: number) => {
        // 投稿削除APIエンドポイントを呼び出し

        try {
            const newPost = await apiClient.post("/posts/postDelete", {
                postId: e,
            });

            console.log(newPost);

            alert("投稿を削除しました。");
            // 削除後の最新の投稿を再取得して表示する
            const response = await apiClient.get("/posts/get_latest_post");
            setLatestPosts(response.data);
        } catch (err) {
            alert("ログインしてください。");
        }

    }

    useEffect(() => {
        const fetchLatestPosts = async () => {
            try {
                const response = await apiClient.get("/posts/get_latest_post");
                setLatestPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchLatestPosts();
    }, []);

    return (
        <div className="h-screen flex flex-col justify-between">
            <div className="m-auto">
                <div className="my-10 shadow-md w-96 bg-white">
                    <div className="my-20 p-2">
                        <div className="flex justify-center h-36 my-5">
                            <img src={profile.profileImageUrl} className="rounded-full" alt="プロフィール画像" />
                        </div>
                        <div className='text-center'>
                            <h2>{profile.user.username}</h2>
                            <p className=' my-8'>{profile.bio}</p>
                        </div>
                    </div>
                </div>

                {latestPosts.map((post: PostType) => (
                    <div key={post.id} className="my-10 shadow-md w-96 bg-white">
                        <div className="flex p-2">
                            <div className="flex p-1">
                                <img src={profile.profileImageUrl} className="rounded-full" />
                            </div>
                            <div className="p-1">
                                <p>投稿者ID：{post.author.username}</p>
                                <p>投稿日時：{new Date(post.createdAt).toLocaleString()}</p>
                            </div>
                            <div className="p-1">
                                <button onClick={() => onDelete(post.id)} className="py-1 bg-slate-400 text-white rounded-md hover-:bg-blue-700 focus:outline-none text-sm w-12">削除</button>
                            </div>
                        </div>
                        <div className="p-5">
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserProfile;