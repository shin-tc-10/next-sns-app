import Head from "next/head";
import TimeLine from "@/components/TimeLine";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next SNS App</title>
      </Head>
      <div>
        <TimeLine />
      </div>
    </>
  );
}
