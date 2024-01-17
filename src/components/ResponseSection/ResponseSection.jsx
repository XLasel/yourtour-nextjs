import React from "react";
import styles from "./ResponseSection.module.scss";
import Section from "../Section/Section";
import ResponseCard from "./ResponseCard/ResponseCard";
import { responseData } from "@/constants";

const ResponseSection = () => {
  const title = "Фотографии путешествий";
  const subtitle =
    "Идейные соображения высшего порядка, а также рамки и место обучения кадров";

  return (
    <Section title={title} subtitle={subtitle}>
      <div className={styles.flex}>
        {responseData.map((user, id) => {
          return (
            <ResponseCard
              key={id}
              text={user.text}
              userName={user.name}
              selectedTour={user.tour}
              userAvatar={user.imageSrc}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default ResponseSection;
