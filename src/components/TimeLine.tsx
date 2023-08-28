// import React, { useEffect, useState } from "react";
import apiClient from "@/lib/apiClient";

const TimeLine = () => {
  // const [postText, setPostText] = useState<string>("");
  // const [latestPosts, setLatestPosts] = useState<any[]>("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPost = await apiClient.post("/postspost", {
        content: postText,
      });
      setLatestPosts((prevPosts) => [newPost.data, ...prevPosts]);
      setPostText("");
    } catch (err) {
      alert("ログインしてください。");
    }
  };

  // useEffect(() => {
  //   const fetchLatestPosts = async () => {
  //     try {
  //       const response = await apiClient.get("/posts/get_latest_post");
  //       setLatestPosts(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchLatestPosts();
  // }, []);

  return (
    <div>
      <h1>Next SNS App</h1>
      <div>
        <p>投稿する</p>
        {/* <form onSubmit={handleSubmit}> */}
        <textarea></textarea>
        {/* <textarea onChange={handleSubmit}></textarea> */}
        <button type="submit">Post!</button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default TimeLine;
