import React from "react";
import Link from "next/link";

const withdrawalCompleted = () => {
  return (
    <div className="my-20">
      <h2>退会が完了しました。</h2>
      <Link href="/">ホームへ戻る</Link>
    </div>
  )
}

export default withdrawalCompleted
