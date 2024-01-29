import { forwardRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './BtnLink.module.scss';

const BtnLink = forwardRef(({ active, hovered }, ref) => {
  return (
    <Link
      ref={ref}
      className={classNames(styles.btn, {
        [styles.hovered]: hovered,
        [styles.active]: active,
      })}
      href="#constructor"
    >
      <span className={styles.text}>Подробнее</span>
    </Link>
  );
});

BtnLink.displayName = 'BtnLink';

export { BtnLink };
