'use client';

import { useFormContext } from 'react-hook-form';
import { string, oneOf, bool, func } from 'prop-types';
import cx from 'classnames';

import s from './Button.module.scss';

export const Button = ({ label, type = 'button', isPrimary, onClick }) => {
  const {
    formState: { isValid },
  } = useFormContext();

  const isSubmitAndInvalid = type === 'submit' && !isValid;

  const buttonClass = cx(s.root, { [s.primary]: isPrimary });

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
  label: string.isRequired,
  type: oneOf(['button', 'submit', 'reset']),
  isPrimary: bool,
  onClick: func,
};
