'use client';

import { ChoiceCard } from '@/widgets/ChoiceCard';

import { cardsData } from '../../config';

import { HoverActiveProvider } from '@/shared/context/HoverActiveContext';
import { useTabContext } from '@/shared/context/TabContext';

import styles from './ChoiceList.module.scss';

export const ChoiceList = () => {
  const { activeTab } = useTabContext();

  const filteredCards = cardsData.filter((card) =>
    card.category.includes(activeTab),
  );

  return (
    <div className={styles.flex}>
      {filteredCards.map((card, id) => {
        return (
          <HoverActiveProvider key={id}>
            <ChoiceCard
              classParent={styles.cards}
              title={card.title}
              transfer={card.transfer}
              price={card.price}
              imageSrc={card.imageSrc}
            />
          </HoverActiveProvider>
        );
      })}
    </div>
  );
};
