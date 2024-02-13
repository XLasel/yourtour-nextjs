'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { oneOfType, string, arrayOf, number } from 'prop-types';
import cx from 'classnames';

import { BtnLink } from '@commons/BtnLink';

import { useHoverActive } from '@/context/HoverActiveContext';

import s from './ChoiceCard.module.scss';

export const ChoiceCard = ({
  className,
  title,
  transfer,
  price,
  imageSrc,
  href = '#constructor',
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
      className={cx(s.root, className)}
      {...handlers}
      onClick={handleBtnClick}
    >
      <div className={s.body}>
        <div className={s.promo}>
          <h3 className={s.title}>
            {title} <span className={s['title--transfer']}>{transfer}</span>
          </h3>
          <p>от {formattedPrice} руб</p>
        </div>
        <BtnLink ref={btnRef} active={active} hovered={hovered} href={href} />
      </div>
      <Image className={s.image} src={imageSrc} alt={title} fill />
    </div>
  );
};

ChoiceCard.propTypes = {
  className: oneOfType([string, arrayOf(string)]),
  title: string.isRequired,
  transfer: string,
  price: oneOfType([string, number]),
  imageSrc: string.isRequired,
  href: string,
};
