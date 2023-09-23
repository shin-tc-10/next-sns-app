import Head from 'next/head';
import React, { useState } from 'react';
import apiClient from "@/lib/apiClient";
import { useRouter } from "next/router";

const Signup = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 新規登録APIと通信
        try {
            await apiClient.post("/auth/register", {
                username,
                email,
                password,
            });
            router.push("/login");
        } catch (err) {
            alert("入力内容が正しくありません。");
        }
    };

    return (
        <div>
            <Head>
                <title>新規作成</title>
            </Head>
            <div>
                <h2>アカウントを作成</h2>
            </div>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>お名前</label>
                            <input id="name" name="name" type="text" autoComplete="name" required className="" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
                        </div>
                        <div>
                            <label>メールアドレス</label>
                            <input id="email" name="email" type="text" autoComplete="email" required className="" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label>パスワード</label>
                            <input id="password" name="password" type="text" autoComplete="new-password" required className="" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <button type="submit">新規登録</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signup;