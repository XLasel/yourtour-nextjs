import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({ label, style, disabled, type }) => {
  const buttonStyle = classNames(styles.button, {
    [styles.primary]: style === "primary",
    [styles.disabled]: disabled,
  });

  return (
    <button className={buttonStyle} type={type} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
