import apiClient from '@/lib/apiClient';
import { PostType, Profile } from '@/types';
import { GetServerSideProps } from 'next';
import React from 'react';

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
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img src={profile.profileImageUrl}/>
                        <div>
                            <h2>{profile.user.username}</h2>
                            <p>{profile.bio}</p>
                        </div>
                    </div>
                </div>
                {posts.map((post: PostType) => (
                    <div key={post.id}>
                        <div>
                            <div>
                                <img src={profile.profileImageUrl} />
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