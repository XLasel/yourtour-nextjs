import styles from "./Button.module.scss";

const Button = (type) => {
  const isReset = type === "reset";
  const label = isReset ? "Cбросить" : "Найти тур";
  return (
    <button
      className={`${styles.button} ${isReset ? "" : styles["button--primery"]}`}
      type={type}
    >
      Найти тур
    </button>
  );
};

export default Button;
