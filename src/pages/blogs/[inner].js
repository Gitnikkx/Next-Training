import Link from "next/link";
import React from "react";
import styles from "../../styles/BlogInner.module.css";
import { useRouter } from "next/router";

const innerBlog = () => {
  const router = useRouter();
  const inner = router.query.inner;
  return (
    <>
      <main className={styles.main}>
        <h1>Welcome to the blogs inner page</h1>
        <h2>This is blogs for {inner}</h2>
        <Link href="/blogs">
          <button className={styles.button}>Go back !!!!</button>
        </Link>
      </main>
    </>
  );
};

export default innerBlog;
