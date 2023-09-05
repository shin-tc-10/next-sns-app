import React from "react";
import Head from "next/head";
import { useAuth } from "@/context/auth";
import apiClient from '@/lib/apiClient';

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await apiClient.post("/auth/login", {
                email,
                password,
            });

            const token = response.data.token;

            login(token);

            router.push("/");

        } catch (err) {
            alert("入力内容が正しくありません。");
        }
    };


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
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input 
                id="email"
                name="email"
                type="email" 
                autoComplete="email"
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement> => setEmail(e.target.value))}
                />
            </div>
            <div>
              <label>パスワード</label>
              <input 
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
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
