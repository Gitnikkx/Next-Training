import React from "react";
import Link from "next/link";
import styles from "../../styles/About.module.css";

const Blogs = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>B L O G S</h1>
        <br />
        <h1>B L O G S</h1>
        <br />
        <h1>B L O G S</h1>
        <br />
        <h1>B L O G S</h1>
        <br />
      <Link href="/blogs/[inner]" as="/blogs/cars">
        <button className={styles.button}>Go Blogs for Car</button>
      </Link><br/>
      <Link href="/blogs/[inner]" as="/blogs/books">
        <button className={styles.button}>Blogs for Books</button>
      </Link><br/>
      <Link href="/blogs/[inner]" as="/blogs/tech">
        <button className={styles.button}>Tech blogs</button>
      </Link>
      </main>
    </>
  );
};

export default Blogs;
