import PropTypes from 'prop-types';
import cx from 'classnames';

import Logo from 'public/image/icons/YouTour.svg';
import { NavLinks } from './config';

import s from './Navbar.module.scss';

export const Navbar = ({ isFixed, isShow }) => {
  return (
    <div
      className={cx(s.wrapper, {
        [s.fixed]: isFixed,
        [s['show-nav']]: isShow.showNav,
        [s['close-nav']]: isShow.closeNav,
      })}
    >
      <nav className={s.nav}>
        <div className={s['logo-wrapper']}>
          <a href="#">
            <Logo className={s.logo} />
          </a>
        </div>
        <ul className={s.list}>
          {NavLinks.map((link) => (
            <li key={link.key}>
              <a href={link.href} key={link.key}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <a href="tel:+79999999999">+7 999 999 99 99</a>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  isFixed: PropTypes.bool,
  isShow: PropTypes.objectOf(PropTypes.bool),
};
