import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

import styles from './Button.module.scss';

export const Button = ({ label, type }) => {
  const {
    reset,
    formState: { isValid },
  } = useFormContext();

  const disabled = !isValid;

  const resetForm = () => {
    reset();
  };
  const buttonStyle = classNames(styles.button);

  const buttonPrimaryStyle = classNames(buttonStyle, styles.primary, {
    [styles.disabled]: disabled,
  });

  const buttonProps =
    type === 'submit'
      ? { type: 'submit', className: buttonPrimaryStyle, disabled: disabled }
      : type === 'reset'
        ? { type: 'reset', className: buttonStyle, onClick: resetForm }
        : { type: 'button', className: buttonStyle };

  return <button {...buttonProps}>{label}</button>;
};
