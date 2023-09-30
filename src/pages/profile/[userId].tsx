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
        <div>
            <div>
                <div>
                    <div>
                        <img src={profile.profileImageUrl} />
                        <div>
                            <h2>{profile.user.username}</h2>
                            <p>{profile.bio}</p>
                        </div>
                    </div>
                </div>
                {latestPosts.map((post: PostType) => (
                    <div key={post.id}>
                        <div>
                            <div>
                                <img src={profile.profileImageUrl} />
                                <button onClick={() => onDelete(post.id)}>削除</button>
                                <div>
                                    <h2>
                                        {post.author.username}
                                    </h2>
                                    <p>
                                        {new Date(post.createdAt).toLocaleString()}
                                    </p>
                                </div>
                                <p>{post.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserProfile;