import React from "react";
import Head from "next/head";
import { useAuth } from "@/context/auth";

const Login = () => {
  return (
    <div>
      <Head>
        <title>ログイン</title>
      </Head>
      <div>
        <h2>アカウントにログイン</h2>
      </div>
      <div>
        <div>
          <form>
            <div>
              <label>メールアドレス</label>
              <input type="email" />
            </div>
            <div>
              <label>パスワード</label>
              <input type="password" />
            </div>
            <div>
              <button type="submit">ログイン</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
