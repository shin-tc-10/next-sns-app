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
      <main className="w-48 m-auto">
        <div className=" overflow-auto my-20">
          {latestPosts.map((post: PostType) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div>
              <textarea className="shadow-xl" placeholder="何を呟く？" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setPostText(e.target.value)} value={postText} style={{ width: '600px', margin: '70px auto 10px' }} />
              <div className="d-grid gap-2" style={{ width: '600px', margin: '0 auto 10px' }}>
                <button type="submit" >投稿する</button></div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default TimeLine;
