"use client";

import React from "react";
import styles from "./ChoiceCard.module.scss";
import BtnLink from "../BtnLink/BtnLink";
import useHoverActive from "@/hooks/useHoverActive";
import Image from "next/image";

const ChoiceCard = ({ classParent = "", title, price, imageSrc }) => {
  const formattedPrice =
    price !== undefined ? Number(price).toLocaleString() : "";
  const { isHovered, isActive, handlers } = useHoverActive();

  return (
    <div className={`${styles.card} ${classParent}`} {...handlers}>
      <div className={styles.body}>
        <div className={styles.promo}>
          <h3 className={styles.title}>{title}</h3>
          <p>от {formattedPrice} руб</p>
        </div>
        <BtnLink isHovered={isHovered} isActive={isActive} />
      </div>
      <Image className={styles.image} src={imageSrc} alt={title} fill />
    </div>
  );
};

export default ChoiceCard;
