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
      className={cx(s.root, {
        [s['nav-fixed']]: navFixed,
      })}
    >
      <Navbar isFixed={navFixed} isShow={navbarState} />
      <div className={s.content}>
        <div className={s.wrapper}>
          <h1 className={s.title}>Идеальные путешествия существуют</h1>
          <p className={s.text}>
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
