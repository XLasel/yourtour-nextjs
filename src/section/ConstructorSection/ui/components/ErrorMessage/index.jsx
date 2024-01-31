'use client';

import { useFormContext } from 'react-hook-form';

import styles from './ErrorMessage.module.scss';

export const ErrorMessage = ({ id }) => {
  const {
    setFocus,
    formState: { errors },
  } = useFormContext();

  return (
    errors[id]?.message && (
      <div className={styles['error-tooltip']} onClick={() => setFocus(id)}>
        {errors[id].message}
      </div>
    )
  );
};
