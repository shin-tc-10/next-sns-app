import React from "react";
import { useAuth } from "@/context/auth";
import Link from "next/link";


const HeaderMenu = () => {
  const { user, logout, } = useAuth();

  return (
    <header>
      <div>
        <h1><Link href="/">Next SNS App</Link></h1>
        <nav aria-controls="basic-navbar-nav">
          <ul className="me-auto">
            {user ? (
              <>
                <Link href={`/profile/${user.id}`}>プロフィール</Link>
                <button onClick={logout} >ログアウト</button>
                <Link href="/withdrawal">退会</Link>
              </>) : (<>
                <Link href="/login">ログイン</Link>
                <Link href="/signup">サインアップ</Link>
              </>)}
          </ul>
        </nav>
      </div>
    </header >
  );
};

export default HeaderMenu;
