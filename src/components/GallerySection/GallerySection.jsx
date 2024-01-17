import React from "react";
import styles from "./GallerySection.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Section from "../Section/Section";

const GallerySection = ({ photos }) => {
  const title = "Отзывы наших путешественников";
  const subtitle =
    "Идейные соображения высшего порядка, а также рамки и место обучения кадров";

  return (
    <Section title={title} subtitle={subtitle}>
      <div className={styles.flexbox}>
        {photos.map((row, rowIndex) => (
          <div
            className={classNames(styles.row, {
              [styles["row-small"]]: rowIndex % 2 === 0,
            })}
            key={rowIndex}
          >
            {row.map((photo, columnIndex) => (
              <div className={styles.item} key={columnIndex}>
                <Image
                  src={photo}
                  width="0"
                  height="0"
                  sizes="100vw"
                  //   style={{ width: "100%", height: "auto" }}
                  alt={`Travel Photo ${
                    rowIndex * row.length + columnIndex + 1
                  }`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default GallerySection;
