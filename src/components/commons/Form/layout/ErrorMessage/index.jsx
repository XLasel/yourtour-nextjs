'use client';

import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import s from './ErrorMessage.module.scss';

export const ErrorMessage = ({ id }) => {
  const {
    setFocus,
    formState: { errors },
  } = useFormContext();

  return (
    errors[id]?.message && (
      <div className={s['error-tooltip']} onClick={() => setFocus(id)}>
        {errors[id].message}
      </div>
    )
  );
};

ErrorMessage.propTypes = {
  id: PropTypes.string.isRequired,
};
