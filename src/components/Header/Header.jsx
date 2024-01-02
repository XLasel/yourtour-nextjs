import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles["content__flex"]}>
          <h1 className={styles["content__title"]}>
            Идеальные путешествия существуют
          </h1>
          <p className={styles["content__text"]}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>
          <Link className={styles.btn} href="#choice">
            <span>Найти тур</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
