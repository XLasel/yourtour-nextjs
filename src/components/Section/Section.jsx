import styles from "./Section.module.scss";
import Link from "next/link";

const Section = ({ title, isList, options, subtitle, children }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.top} ${isList ? styles["top_for-list"] : ""}`}>
        <h2 className={styles.title}>{title}</h2>
        {isList ? (
          <ul className={styles.list}>
            {options.map((option) => (
              <li className={styles["list-item"]} key={option.key}>
                <Link href={option.href}>{option.text}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
