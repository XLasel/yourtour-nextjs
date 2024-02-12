'use client';

import { ChoiceCard } from '../ChoiceCard';

import { cardsData } from '../config';

import { HoverActiveProvider } from '@/context/HoverActiveContext';
import { useTabContext } from '@/context/TabContext';

import s from './ChoiceList.module.scss';

export const ChoiceList = () => {
  const { activeTab } = useTabContext();

  const filteredCards = cardsData.filter((card) =>
    card.category.includes(activeTab),
  );

  return (
    <div className={s['cards-list']}>
      {filteredCards.map((card, id) => (
        <HoverActiveProvider key={id}>
          <ChoiceCard
            className={s.cards}
            title={card.title}
            transfer={card.transfer}
            price={card.price}
            imageSrc={card.imageSrc}
          />
        </HoverActiveProvider>
      ))}
    </div>
  );
};
