import { element, bool } from 'prop-types';
import cx from 'classnames';

import s from './Container.module.scss';

export const Container = ({ children, isFluid }) => (
  <div className={cx(s.root, { [s.fluid]: isFluid })}>{children}</div>
);

Container.propTypes = {
  children: element,
  isFluid: bool,
};
