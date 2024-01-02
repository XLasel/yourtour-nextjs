import Link from "next/link";
import styles from "./BtnLink.module.scss";

const BtnLink = ({ isHovered, isActive }) => {
  return (
    <Link
      className={`${styles.btn} ${isHovered && styles.hovered} ${
        isActive && styles.active
      }`}
      href="#!"
    >
      <span className={styles.text}>Подробнее</span>
    </Link>
  );
};

export default BtnLink;
