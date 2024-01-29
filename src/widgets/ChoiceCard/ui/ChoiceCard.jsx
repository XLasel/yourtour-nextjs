'use client';

import { useRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { BtnLink } from '@/shared/ui/components/BtnLink';

import { useHoverActive } from '@/shared/context/HoverActiveContext';

import styles from './ChoiceCard.module.scss';

export const ChoiceCard = ({
  classParent,
  title,
  transfer,
  price,
  imageSrc,
}) => {
  const { active, hovered, handlers } = useHoverActive();
  const btnRef = useRef(null);

  const handleBtnClick = () => {
    if (btnRef.current) {
      btnRef.current.click();
    }
  };

  const formattedPrice =
    price !== undefined ? Number(price).toLocaleString() : '';

  return (
    <div
      className={classNames(styles.card, classParent)}
      {...handlers}
      onClick={handleBtnClick}
    >
      <div className={styles.body}>
        <div className={styles.promo}>
          <h3 className={styles.title}>
            {title}{' '}
            <span className={styles['title--transfer']}>{transfer}</span>
          </h3>
          <p>от {formattedPrice} руб</p>
        </div>
        <BtnLink ref={btnRef} active={active} hovered={hovered} />
      </div>
      <Image className={styles.image} src={imageSrc} alt={title} fill />
    </div>
  );
};
