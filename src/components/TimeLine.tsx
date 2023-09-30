import React, { useEffect, useState } from "react";
import apiClient from "@/lib/apiClient";
import Post from './Post';
import { PostType } from "../types";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              {/* <Form.Label style={{textAlign: 'center'}}>新規投稿</Form.Label> */}
              <Form.Control as="textarea" placeholder="何を呟く？" rows={3} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setPostText(e.target.value)} value={postText} style={{ width: '600px', margin: '70px auto 10px' }} />
              <div className="d-grid gap-2" style={{ width: '600px', margin: '0 auto 10px' }}>
                <Button type="submit" variant="primary" size="lg">投稿する</Button></div>
            </Form.Group>
          </form>
        </div>
        <div className="mb-2" style={{ textAlign: 'center' }}>
          {latestPosts.map((post: PostType) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TimeLine;
