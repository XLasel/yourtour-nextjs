'use client';

import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

import { ErrorMessage } from '../../compoents/ErrorMessage';

import styles from './ItemFormLayout.module.scss';

export const ItemFormLayout = ({ styleParentField, label, id, children }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className={classNames(styleParentField, styles.field)}>
      <label
        htmlFor={id}
        className={classNames(styles.label, {
          [styles.invalid]: !!errors[id],
        })}
      >
        {label}
      </label>
      {children}
      <ErrorMessage id={id} />
    </div>
  );
};
