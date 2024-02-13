'use client';

import { useFormContext } from 'react-hook-form';
import { string } from 'prop-types';

import s from './ErrorMessage.module.scss';

export const ErrorMessage = ({ id }) => {
  const {
    setFocus,
    formState: { errors },
  } = useFormContext();

  return (
    errors[id]?.message && (
      <div className={s.root} onClick={() => setFocus(id)}>
        {errors[id].message}
      </div>
    )
  );
};

ErrorMessage.propTypes = {
  id: string.isRequired,
};
