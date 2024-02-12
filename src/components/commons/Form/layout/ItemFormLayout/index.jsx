'use client';

import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ErrorMessage } from '../ErrorMessage';

import s from './ItemFormLayout.module.scss';

export const ItemFormLayout = ({ className, label, id, children }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className={cx(s.field, className)}>
      <label
        htmlFor={id}
        className={cx(s.label, {
          [s.invalid]: !!errors[id],
        })}
      >
        {label}
      </label>
      {children}
      <ErrorMessage id={id} />
    </div>
  );
};

ItemFormLayout.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
