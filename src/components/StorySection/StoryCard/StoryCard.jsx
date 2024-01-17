"use client";
import React from "react";
import styles from "./StoryCard.module.scss";
import Image from "next/image";
import { useHoverActive } from "@/context/HoverActiveContext";
import BtnLink from "@/components/BtnLink/BtnLink";

const StoryCard = ({ title, transfer, content, socialLinks, imageUrl }) => {
  const { handlers } = useHoverActive();
  return (
    <div className={styles.ticket}>
      <div className={styles.body} {...handlers}>
        <div className={styles.top}>
          <h3 className={styles.title}>
            {title}{" "}
            <span className={styles["title--transfer"]}>{transfer}</span>
          </h3>
          <div className={styles.text}>
            {content.map((item, index) => (
              <div key={index}>
                {item.type === "paragraph" && <p>{item.text}</p>}
                {item.type === "list" && (
                  <ul className={styles.list}>
                    {item.items.map((listItem, listIndex) => (
                      <li key={listIndex} className={styles.item}>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <BtnLink />
          <ul className={styles.social}>
            {socialLinks.map((link, index) => (
              <li key={index} className={styles["social-item"]}>
                <a className={styles["social-link"]} href={link.url}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Image width="0" height="0" sizes="100vw" src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default StoryCard;
