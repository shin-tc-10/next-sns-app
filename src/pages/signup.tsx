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
        <div className="h-screen flex items-center justify-center">
            <Head>
                <title>新規作成</title>
            </Head>
            <div className="my-20 w-96 shadow-2xl p-8 rounded bg-slate-100">
                <div className="mb-8">
                    <h1 className="text-xl text-center font-normal">アカウントを作成</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-6 flex flex-col'>
                            <label>お名前</label>
                            <input id="name" name="name" type="text" autoComplete="name" required className="border border-gray-200 p-2 rounded-m" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
                        </div >
                        <div className='mb-6 flex flex-col'>
                            <label>メールアドレス</label>
                            <input id="email" name="email" type="text" autoComplete="email" required className="border border-gray-200 p-2 rounded-m" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                        </div>
                        <div className='mb-6 flex flex-col'>
                            <label>パスワード</label>
                            <input id="password" name="password" type="text" autoComplete="new-password" required className="border border-gray-200 p-2 rounded-m" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                        </div>
                        <div className='text-center'>
                            <button type="submit" className="ml-2 px-4 py-2 bg-slate-950 text-white rounded-md hover-:bg-blue-700 focus:outline-none w-24">新規登録</button>
                        </div>
                    </form >
                </div >
            </div >
        </div >

    )
}

export default Signup;