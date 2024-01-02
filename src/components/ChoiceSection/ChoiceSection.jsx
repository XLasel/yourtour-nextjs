import { ChoiceOptions, cardsData } from "@/constants";
import styles from "./ChoiceSection.module.scss";
import ChoiceCard from "../ChoiceCard/ChoiceCard";
import Section from "../Section/Section";

const ChoiceSection = () => {
  const title = "Выбери свой тур";
  return (
    <Section title={title} isList options={ChoiceOptions}>
      <div className={styles.flex}>
        {cardsData.map((card, id) => {
          return (
            <ChoiceCard
              classParent={styles.cards}
              key={id}
              title={card.title}
              price={card.price}
              imageSrc={card.imageSrc}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default ChoiceSection;
