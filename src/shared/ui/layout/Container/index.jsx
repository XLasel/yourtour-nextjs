import styles from './Container.module.scss';

export const Container = ({ children, isFluid }) => {
  const containerStyles = isFluid
    ? styles['container-fluid']
    : styles.container;
  return <div className={containerStyles}>{children}</div>;
};
