import React from "react";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/router";
import apiClient from "@/lib/apiClient";
import Head from 'next/head';

const Withdrawal = () => {
    const { user, logout } = useAuth();

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        // 新規登録APIと通信
        try {
            await apiClient.post("/auth/delete", {
                user
            });
            logout();
            router.push("/withdrawalCompleted");
        } catch (err) {
            alert("アカウント削除に失敗しました。");
        }
    };

    return (
        <div>
            <Head>
                <title>退会</title>
            </Head>
            <div>
                <h2>アカウントを削除</h2>
            </div>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <button type="submit">退会する</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Withdrawal;