'use client';

import Link from 'next/link';
import classNames from 'classnames';

import { Navbar } from '@/widgets/Navbar';

import { useScrollHandler } from '../model/useScrollHandler';

import styles from './Header.module.scss';

export const Header = () => {
  const { navFixed, navbarState } = useScrollHandler();

  return (
    <header
      className={classNames(styles.header, {
        [styles['nav-fixed']]: navFixed,
      })}
    >
      <Navbar isFixed={navFixed} isShow={navbarState} />
      <div className={styles.content}>
        <div className={styles['content__flex']}>
          <h1 className={styles['content__title']}>
            Идеальные путешествия существуют
          </h1>
          <p className={styles['content__text']}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>
          <Link href="#constructor" className={styles.btn}>
            <span>Найти тур</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
