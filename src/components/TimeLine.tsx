import React, { useEffect, useState } from "react";
import apiClient from "@/lib/apiClient";
import Post from './Post';
import { PostType } from "../types";

const TimeLine = () => {
  const [postText, setPostText] = useState<string>("");
  const [latestPosts, setLatestPosts] = useState<any[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const newPost = await apiClient.post("/posts/post", {
        content: postText,
      });
      
      setLatestPosts((prevPosts) => [newPost.data, ...prevPosts]);
      // テキストエリアを空にする
      setPostText("");
    } catch (err) {
      alert("ログインしてください。");
    }
  };

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
      <main>
      <div>
        <form onSubmit={handleSubmit}>
        <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
          setPostText(e.target.value)} value={postText}></textarea>
        <button type="submit">Post!</button>
        </form>
      </div>
      {latestPosts.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
      </main>
    </div>
  );
};

export default TimeLine;
