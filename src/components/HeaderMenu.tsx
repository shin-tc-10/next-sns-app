import React from "react";
import { useAuth } from "@/context/auth";
import Link from "next/link";


const HeaderMenu = () => {
  const { user, logout, } = useAuth();

  return (
    <header>
      <div className="shadow-md flex h-16 items-center justify-between bg-blue-400 text-white">
        <h1><Link href="/" className="px-8 text-xl">Next SNS App</Link></h1>
        <nav>
          <ul className="flex space-x-4 text-sm">
            {user ? (
              <>
                <Link href={`/profile/${user.id}`} className="pr-7">プロフィール</Link>
                <button onClick={logout} className="pr-7">ログアウト</button>
                <Link href="/withdrawal" className="pr-7">退会</Link>
              </>) : (<>
                <Link href="/login" className="pr-7">ログイン</Link>
                <Link href="/signup" className="pr-7">サインアップ</Link>
              </>)}
          </ul>
        </nav>
      </div>
    </header >
  );
};

export default HeaderMenu;
