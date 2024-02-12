import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Container.module.scss';

export const Container = ({ children, isFluid }) => (
  <div className={cx(s.container, { [s['container-fluid']]: isFluid })}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.element,
  isFluid: PropTypes.bool,
};
