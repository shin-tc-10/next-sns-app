import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/auth";

const HeaderMenu = () => {
  const { user, logout,  } = useAuth();

  return (
    <header>
      <div>
        <h1>
          <Link href="/">Next SNS App</Link>
        </h1>
        <nav>
          <ul>
            {user ? (
              <>
                <li>プロフィール</li>
                <button onClick={logout}>ログアウト</button>
                <Link href="/withdrawal">退会</Link>
              </>
            ) : (
              <>
                <Link href="/login">ログイン</Link>
                <Link href="/signup">サインアップ</Link>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMenu;
