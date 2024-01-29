import classNames from 'classnames';

import { ListSection } from './components/ListSection';

import styles from './Section.module.scss';

export const Section = ({
  title,
  isList,
  customClassForTop,
  options,
  subtitle,
  children,
  id,
}) => {
  return (
    <section className={styles.section} id={id}>
      <div
        className={classNames(styles.top, customClassForTop, {
          [styles['top_for-list']]: isList,
        })}
      >
        <h2 className={styles.title}>{title}</h2>
        {isList ? (
          <ListSection options={options} />
        ) : (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
};
