import React from "react";
import { useAuth } from "@/context/auth";
import Link from "next/link";


const HeaderMenu = () => {
  const { user, logout, } = useAuth();

  return (
    <header>
      <div className="fixed top-0 left-0 w-full text-white p-4 shadow-md flex h-16 items-center justify-between bg-slate-950 text-white">
        <h1><Link href="/" className="px-3 text-xl">NEXT SNS</Link></h1>
        <nav>
          <ul className="flex space-x-4 text-sm">
            {user ? (
              <>
                <Link href={`/profile/${user.id}`} className="pr-3">プロフィール</Link>
                <button onClick={logout} className="pr-3">ログアウト</button>
                {/* <Link href="/withdrawal" className="pr-3">退会</Link> */}
              </>) : (<>
                <Link href="/login" className="pr-3">ログイン</Link>
                <Link href="/signup" className="pr-3">サインアップ</Link>
              </>)}
          </ul>
        </nav>
      </div>
    </header >
  );
};

export default HeaderMenu;
