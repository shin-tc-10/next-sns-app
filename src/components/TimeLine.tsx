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
    <div className="h-screen flex flex-col justify-between">
      <main className="m-auto overflow-auto">
        <div className="my-20">
          {latestPosts.map((post: PostType) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="fixed bottom-0 left-0 w-full bg-white p-4 items-center flex justify-between">
              <textarea className="shadow-xl block block w-full p-2" placeholder="何を呟く？" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setPostText(e.target.value)} value={postText} />
              <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full hover-:bg-blue-700 focus:outline-none w-24">投稿</button></div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default TimeLine;
