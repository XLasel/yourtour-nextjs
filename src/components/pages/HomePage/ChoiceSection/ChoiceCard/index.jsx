'use client';

import { useRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
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
      className={cx(s.card, className)}
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
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  title: PropTypes.string.isRequired,
  transfer: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageSrc: PropTypes.string.isRequired,
  href: PropTypes.string,
};
