import React from "react";
import Link from "next/link";
import styles from "../styles/About.module.css"

const About = () => {
  return (
    <>
      <main className={styles.main}> 
        <h1>This is the about page</h1>
        <Link href="/blogs">
          <button className={styles.button}>Click for Blogs page</button>
        </Link> 
      </main>
    </>
  );
};

export default About;
