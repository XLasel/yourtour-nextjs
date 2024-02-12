'use client';

import { useRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { BtnLink } from '@commons/BtnLink';

import { useHoverActive } from '@/context/HoverActiveContext';

import s from './StoryCard.module.scss';

export const StoryCard = ({
  title,
  transfer,
  content,
  socialLinks,
  imageUrl,
}) => {
  const { active, hovered, handlers } = useHoverActive();
  const btnRef = useRef(null);

  const handleBtnClick = () => {
    if (btnRef.current) {
      btnRef.current.click();
    }
  };

  return (
    <div className={s.ticket} {...handlers} onClick={handleBtnClick}>
      <div className={s.body}>
        <div className={s.top}>
          <h3 className={s.title}>
            {title} <span className={s['title--transfer']}>{transfer}</span>
          </h3>
          <div className={s.text}>
            {content.map((item, index) => (
              <div key={index}>
                {item.type === 'paragraph' && <p>{item.text}</p>}
                {item.type === 'list' && (
                  <ul className={s.list}>
                    {item.items.map((listItem, listIndex) => (
                      <li key={listIndex} className={s.item}>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={s.bottom}>
          <BtnLink ref={btnRef} active={active} hovered={hovered} />
          <ul className={s.social}>
            {socialLinks.map((link, index) => (
              <li key={index} className={s['social-item']}>
                <a className={s['social-link']} href={link.url}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Image width="0" height="0" sizes="100vw" src={imageUrl} alt="" />
      </div>
    </div>
  );
};

StoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  transfer: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['paragraph', 'list']).isRequired,
      text: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string, text: PropTypes.string }),
  ).isRequired,
  imageUrl: PropTypes.string.isRequired,
};
