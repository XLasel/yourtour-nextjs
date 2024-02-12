import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cx from 'classnames';

import s from './BtnLink.module.scss';

const BtnLink = forwardRef(({ active, hovered, href = '#' }, ref) => {
  return (
    <Link
      ref={ref}
      className={cx(s.btn, {
        [s.hovered]: hovered,
        [s.active]: active,
      })}
      href={href}
    >
      <span className={s.text}>Подробнее</span>
    </Link>
  );
});

BtnLink.displayName = 'BtnLink';

BtnLink.propTypes = {
  active: PropTypes.bool,
  hovered: PropTypes.bool,
  href: PropTypes.string,
};

export { BtnLink };
