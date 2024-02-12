'use client';

import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Button.module.scss';

export const Button = ({
  label,
  type = 'button',
  variant = 'main',
  onClick,
}) => {
  const {
    formState: { isValid },
  } = useFormContext();

  const isSubmitAndInvalid = type === 'submit' && !isValid;

  const buttonClass = cx(
    s.button,
    { [s.primary]: variant === 'primary' },
    { [s.disabled]: isSubmitAndInvalid },
  );

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={isSubmitAndInvalid}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'main']),
  onClick: PropTypes.func,
};
