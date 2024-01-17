"use client";
import { ChoiceOptions, cardsData } from "@/constants";
import React from "react";
import styles from "./ChoiceSection.module.scss";
import ChoiceCard from "../ChoiceCard/ChoiceCard";
import Section from "../Section/Section";
import { HoverActiveProvider } from "@/context/HoverActiveContext";

const ChoiceSection = () => {
  const title = "Выбери свой тур";

  return (
    <Section title={title} isList options={ChoiceOptions} id="choice">
      <div className={styles.flex}>
        {cardsData.map((card, id) => {
          return (
            <HoverActiveProvider key={id}>
              <ChoiceCard
                classParent={styles.cards}
                title={card.title}
                price={card.price}
                imageSrc={card.imageSrc}
              />
            </HoverActiveProvider>
          );
        })}
      </div>
    </Section>
  );
};

export default ChoiceSection;
