import React, { Children } from "react";
import styles from "../src/styles/About.module.css";

export const Circle = (props) => {
  return (
    <>
      <div className={styles.circle}>
        {props.children}
      </div>
    </>
  );
};
