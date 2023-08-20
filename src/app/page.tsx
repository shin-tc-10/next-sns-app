import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import TimeLine from "../components/TimeLine.tsx";

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
