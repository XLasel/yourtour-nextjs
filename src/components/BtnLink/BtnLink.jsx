"use client";
import Link from "next/link";
import styles from "./BtnLink.module.scss";
import { useHoverActive } from "@/context/HoverActiveContext";
import classNames from "classnames";

const BtnLink = () => {
  const { active, hovered } = useHoverActive();

  return (
    <Link
      className={classNames(styles.btn, {
        [styles.hovered]: hovered,
        [styles.active]: active,
      })}
      href="#!"
    >
      <span className={styles.text}>Подробнее</span>
    </Link>
  );
};

export default BtnLink;
