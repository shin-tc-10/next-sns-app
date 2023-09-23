import React from "react";
import Link from "next/link";

const withdrawalCompleted = () => {
  return (
    <div>
      <h2>退会が完了しました。</h2>
      <Link href="/">ホームへ戻る</Link>
    </div>
  )
}

export default withdrawalCompleted
