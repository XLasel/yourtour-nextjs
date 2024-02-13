'use client';

import { useFormContext } from 'react-hook-form';
import { oneOfType, string, arrayOf, element } from 'prop-types';
import cx from 'classnames';

import { ErrorMessage } from '../ErrorMessage';

import s from './FieldLayout.module.scss';

export const FieldLayout = ({ className, label, id, children }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className={cx(s.root, className)}>
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

FieldLayout.propTypes = {
  className: oneOfType([string, arrayOf(string)]),
  label: string.isRequired,
  id: string.isRequired,
  children: element.isRequired,
};
