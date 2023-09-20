import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/auth";

const HeaderMenu = () => {
  const { user, logout } = useAuth();
  console.log(user);

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
                <li>ログアウト</li>
              </>
            ) : (
              <>
                <Link href="/login">ログイン</Link>
                <li>サインアップ</li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMenu;
