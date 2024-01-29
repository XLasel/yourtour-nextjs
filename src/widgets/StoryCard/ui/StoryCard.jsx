'use client';

import { useRef } from 'react';
import Image from 'next/image';

import { BtnLink } from '@/shared/ui/components/BtnLink';

import { useHoverActive } from '@/shared/context/HoverActiveContext';

import styles from './StoryCard.module.scss';

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
    <div className={styles.ticket} {...handlers} onClick={handleBtnClick}>
      <div className={styles.body}>
        <div className={styles.top}>
          <h3 className={styles.title}>
            {title}{' '}
            <span className={styles['title--transfer']}>{transfer}</span>
          </h3>
          <div className={styles.text}>
            {content.map((item, index) => (
              <div key={index}>
                {item.type === 'paragraph' && <p>{item.text}</p>}
                {item.type === 'list' && (
                  <ul className={styles.list}>
                    {item.items.map((listItem, listIndex) => (
                      <li key={listIndex} className={styles.item}>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <BtnLink ref={btnRef} active={active} hovered={hovered} />
          <ul className={styles.social}>
            {socialLinks.map((link, index) => (
              <li key={index} className={styles['social-item']}>
                <a className={styles['social-link']} href={link.url}>
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
