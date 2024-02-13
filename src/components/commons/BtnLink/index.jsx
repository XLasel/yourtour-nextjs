import { forwardRef } from 'react';
import { bool, string } from 'prop-types';
import Link from 'next/link';
import cx from 'classnames';

import s from './BtnLink.module.scss';

const BtnLink = forwardRef(({ active, hovered, href = '#' }, ref) => {
  return (
    <Link
      ref={ref}
      className={cx(s.root, {
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
  active: bool,
  hovered: bool,
  href: string,
};

export { BtnLink };
