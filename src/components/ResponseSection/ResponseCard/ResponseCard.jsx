import Image from "next/image";
import React from "react";
import styles from "./ResponseCard.module.scss";

const ResponseCard = ({ text, userName, selectedTour, userAvatar }) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        {text.map((p, id) => {
          return <p key={id}>{p}</p>;
        })}
      </div>
      <div className={styles.user}>
        <div className={styles["user-info"]}>
          <h3>{userName}</h3>
          <p>Тур: {selectedTour} </p>
        </div>
        <Image
          className={styles.avatar}
          src={userAvatar}
          alt="Автар автора"
          width={75}
          height={75}
        />
      </div>
    </div>
  );
};

export default ResponseCard;
