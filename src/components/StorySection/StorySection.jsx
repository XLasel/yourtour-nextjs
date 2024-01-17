"use client";
import React from "react";
import Section from "../Section/Section";
import styles from "./StorySection.module.scss";
import { stories } from "@/constants";
import StoryCard from "./StoryCard/StoryCard";
import { HoverActiveProvider } from "@/context/HoverActiveContext";

const StorySection = () => {
  const title = "Истории путешествий";
  const subtitle =
    "Идейные соображения высшего порядка, а также рамки и место обучения кадров";

  return (
    <Section title={title} subtitle={subtitle}>
      <div className={styles.flex}>
        {stories.map((story, index) => (
          <HoverActiveProvider key={index}>
            <StoryCard {...story} />
          </HoverActiveProvider>
        ))}
      </div>
    </Section>
  );
};

export default StorySection;
