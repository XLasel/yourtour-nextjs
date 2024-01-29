import classNames from 'classnames';

import { NavLinks } from '../config';
import Logo from 'public/image/icons/YouTour.svg';

import styles from './Navbar.module.scss';

export const Navbar = ({ isFixed, isShow }) => {
  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.fixed]: isFixed,
        [styles['show-nav']]: isShow.showNav,
        [styles['close-nav']]: isShow.closeNav,
      })}
    >
      <nav className={styles.nav}>
        <div className={styles['logo-wrapper']} onClick={handleScrollUp}>
          <Logo className={styles.logo} />
        </div>
        <ul className={styles.list}>
          {NavLinks.map((link) => {
            return (
              <li key={link.key}>
                <a href={link.href} key={link.key}>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="tel:+79999999999">+7 999 999 99 99</a>
      </nav>
    </div>
  );
};
