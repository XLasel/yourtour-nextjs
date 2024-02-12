'use client';

import Link from 'next/link';
import cx from 'classnames';

import { Navbar } from './Navbar';

import { useScrollHandler } from './useScrollHandler';

import s from './Header.module.scss';

export const Header = () => {
  const { navFixed, navbarState } = useScrollHandler();

  return (
    <header
      className={cx(s.header, {
        [s['nav-fixed']]: navFixed,
      })}
    >
      <Navbar isFixed={navFixed} isShow={navbarState} />
      <div className={s.content}>
        <div className={s['content__flex']}>
          <h1 className={s['content__title']}>
            Идеальные путешествия существуют
          </h1>
          <p className={s['content__text']}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>
          <Link href="#constructor" className={s.btn}>
            <span>Найти тур</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
